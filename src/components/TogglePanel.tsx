"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { CiSettings } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";

export function TogglePanel() {
  const [isControlPanelOpen, setIsControlPanelOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [corner, setCorner] = useState<
    "top-right" | "top-left" | "bottom-right" | "bottom-left"
  >("top-right");
  const panelRef = useRef<HTMLDivElement>(null);
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  // Update CSS classes and panel direction based on corner
  const getPositionClasses = () => {
    switch (corner) {
      case "top-left":
        return "flex-col items-start gap-2";
      case "bottom-left":
        return "flex-col-reverse items-start gap-2";
      case "bottom-right":
        return "flex-col-reverse items-end gap-2";
      default:
        return "flex-col items-end gap-2";
    }
  };

  // Snap to nearest corner when drag ends
  const snapToCorner = useCallback((x: number, y: number) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const isLeft = x < windowWidth / 2;
    const isTop = y < windowHeight / 2;

    if (isTop && isLeft) {
      setCorner("top-left");
      setPosition({ x: 20, y: 20 });
    } else if (isTop && !isLeft) {
      setCorner("top-right");
      setPosition({ x: windowWidth - 80, y: 20 });
    } else if (!isTop && isLeft) {
      setCorner("bottom-left");
      setPosition({ x: 20, y: windowHeight - 80 });
    } else {
      setCorner("bottom-right");
      setPosition({ x: windowWidth - 80, y: windowHeight - 80 });
    }
  }, []);

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      setPosition({ x: newX, y: newY });
    },
    [isDragging, dragStart.x, dragStart.y]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      setIsDragging(false);
      snapToCorner(e.clientX, e.clientY);
    },
    [isDragging, snapToCorner]
  );

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;

      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      setPosition({ x: newX, y: newY });
    },
    [isDragging, dragStart.x, dragStart.y]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;

      setIsDragging(false);
      const touch = e.changedTouches[0];
      snapToCorner(touch.clientX, touch.clientY);
    },
    [isDragging, snapToCorner]
  );

  // Add global event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  // Initialize position
  useEffect(() => {
    const windowWidth = window.innerWidth;
    setPosition({ x: windowWidth - 80, y: 20 });
  }, []);

  return (
    <div
      ref={panelRef}
      className={`fixed z-[9999] transition-all duration-300 ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        isolation: "isolate",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className={`flex ${getPositionClasses()}`}>
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsControlPanelOpen(!isControlPanelOpen)}
          className="p-3 rounded-xl border border-border bg-card hover:bg-muted transition-all shadow-lg"
          title="Toggle Settings"
        >
          <CiSettings className="text-xl" />
        </button>

        {/* Settings Panel */}
        <div
          className="flex flex-col gap-2 transition-all duration-300 ease-out"
          style={{
            opacity: isControlPanelOpen ? 1 : 0,
            transform: `translateY(${
              isControlPanelOpen ? 0 : corner.includes("bottom") ? 10 : -10
            }px) scale(${isControlPanelOpen ? 1 : 0.95})`,
            pointerEvents: isControlPanelOpen ? "auto" : "none",
          }}
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl border border-border bg-card hover:bg-muted transition-all shadow-lg flex items-center justify-center"
            title={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {theme === "light" ? (
              <FaMoon className="text-xl" />
            ) : (
              <FaSun className="text-xl" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted transition-all font-medium text-foreground shadow-lg"
            title="Switch Language"
          >
            {language === "en" ? "VN" : "EN"}
          </button>
        </div>
      </div>
    </div>
  );
}
