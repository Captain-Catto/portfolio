"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePersonalInfo } from "@/hooks/usePersonalInfo";
import { useTranslation } from "@/hooks/useTranslation";
import TypingText from "@/components/TypingText";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { CiSettings } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa";

interface PersonalCardProps {
  className?: string;
}

export function PersonalCard({ className }: PersonalCardProps) {
  const {
    name,
    avatar,
    availabilityStatus,
    cv,
    location,
    languages,
    university,
    socialLinks,
    error,
  } = usePersonalInfo();
  const { t } = useTranslation();
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (error) {
    return (
      <div
        className={cn("bg-card border-2 border-border rounded-2xl", className)}
      >
        <div className="p-6 text-destructive text-sm text-center">{error}</div>
      </div>
    );
  }

  return (
    <div
      className={cn("bg-card border-2 border-border rounded-2xl", className)}
    >
      <div className="p-3 sm:p-4 h-full flex flex-col justify-between gap-2 bg-card rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-2">
          <div className="flex items-center flex-1">
            <div className=" rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
              <Image
                className="object-contain w-full h-full"
                src={avatar}
                alt={name}
                width={80}
                height={80}
              />
            </div>
            <div className="flex items-start gap-2 h-full flex-col ml-2 md:ml-4">
              {/* Availability Badge */}
              <article className="bg-secondary rounded-full shadow-md py-1 px-2 sm:px-3 text-foreground/80 hover:bg-muted transition-all duration-300">
                <span className="flex justify-evenly items-center gap-[2px]">
                  <div className="flex items-center justify-center rounded-full bg-muted w-3 h-3 sm:w-4 sm:h-4">
                    <span
                      className="block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                      style={{ backgroundColor: "#6DD33D" }}
                    ></span>
                  </div>
                  <span className="font-medium text-[10px] sm:text-xs">
                    {availabilityStatus}
                  </span>
                </span>
              </article>

              <h3 className="font-semibold text-lg sm:text-xl text-foreground">
                {name}
              </h3>
              <p className="font-semibold text-xs sm:text-sm">
                <span className="text-foreground/80">
                  {t("personalInfo.imA")}
                </span>{" "}
                <TypingText roles={personalInfo.roles} />
              </p>
            </div>
          </div>

          {/* Resume Download & Settings */}
          <div className="font-medium text-sm text-foreground">
            <div className="flex items-center gap-2">
              <span className="hidden xl:block">{t("common.resume")}</span>
              <a
                href={language === "en" ? cv.english : cv.vietnamese}
                download={`CV_LeQuangTriDat_${
                  language === "en" ? "EN" : "VI"
                }.pdf`}
              >
                <article className="hover:bg-muted transition-all duration-300 cursor-pointer bg-secondary rounded-lg p-2 shadow-md">
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </article>
                <span className="sr-only">{t("common.downloadResume")}</span>
              </a>

              {/* Settings Button */}
              <div className="relative">
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="hover:bg-muted transition-all duration-300 cursor-pointer bg-secondary rounded-lg p-2 shadow-md"
                  title="Settings"
                >
                  <CiSettings className="size-5" />
                </button>

                {/* Settings Panel */}
                {isSettingsOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg p-2 flex gap-2 z-50">
                    {/* Theme Toggle */}
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-muted transition-all duration-300"
                      title={
                        theme === "light"
                          ? "Switch to Dark Mode"
                          : "Switch to Light Mode"
                      }
                    >
                      {theme === "light" ? (
                        <FaMoon className="size-4" />
                      ) : (
                        <FaSun className="size-4" />
                      )}
                    </button>

                    {/* Language Toggle */}
                    <button
                      onClick={toggleLanguage}
                      className="px-3 py-2 rounded-lg hover:bg-muted transition-all duration-300 font-medium text-foreground text-xs"
                      title="Switch Language"
                    >
                      {language === "en" ? "VN" : "EN"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-card-secondary border border-border py-3 sm:py-4 px-3 sm:px-4 rounded-lg shadow-md space-y-2 sm:space-y-3">
          {/* Location */}
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="text-primary text-base sm:text-lg">📍</div>
            <div className="flex flex-col">
              <span className="font-medium text-[10px] sm:text-xs text-muted-foreground text-left">
                {t("common.location")}
              </span>
              <span className="font-medium text-xs sm:text-sm text-foreground/80 text-left">
                {location}
              </span>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-primary text-base sm:text-lg">🌐</div>
            <div className="flex flex-col">
              <span className="font-medium text-[10px] sm:text-xs text-muted-foreground text-left">
                {t("common.languages")}
              </span>
              <span className="font-medium text-xs sm:text-sm text-foreground/80 text-left">
                {languages.join(" & ")}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-primary text-base sm:text-lg">🎓</div>
            <div className="flex flex-col">
              <span className="font-medium text-[10px] sm:text-xs text-muted-foreground text-left">
                {t("common.education")}
              </span>
              <span className="font-medium text-xs sm:text-sm text-foreground/80 text-left">
                {university}
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="bg-secondary rounded-full p-2 sm:p-3 flex justify-center items-center hover:bg-muted transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <IconComponent className="text-foreground/70 text-lg sm:text-xl" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
