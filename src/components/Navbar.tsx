"use client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAVBAR_HEIGHT = 72;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full max-w-7xl mx-auto left-0 right-0 flex justify-between items-center p-4 bg-transparent text-black dark:text-white transition-all duration-300
        ${
          isSticky
            ? "fixed top-0 bg-white/80 dark:bg-black/80 shadow-md z-50 backdrop-blur-sm"
            : ""
        }
      `}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="transition-colors duration-300 hover:text-[#00ff99]"
        >
          {t("name")}
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="relative px-3 py-2 transition-colors duration-300 hover:text-[#00ff99] group"
          >
            {t("navHome")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="relative px-3 py-2 transition-colors duration-300 hover:text-[#00ff99] group"
          >
            {t("navAbout")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick(e, "portfolio")}
            className="relative px-3 py-2 transition-colors duration-300 hover:text-[#00ff99] group"
          >
            {t("navPortfolio")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="relative px-3 py-2 transition-colors duration-300 hover:text-[#00ff99] group"
          >
            {t("navContact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Language Switcher */}
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
