"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  roles: string[];
}

const TypingText: React.FC<TypingTextProps> = ({ roles }) => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (!currentRole) return;

    if (!deleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (!deleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <span className="text-primary font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
