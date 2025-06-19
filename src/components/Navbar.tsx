"use client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const { t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false); // Đóng menu mobile nếu có
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${
          isSticky
            ? " fixed bg-white/80 dark:bg-black/80 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-black dark:text-white">
        {/* Logo */}
        <div className="text-2xl font-bold z-50">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="transition-colors duration-300 hover:text-[#00ff99]"
          >
            {t("name")}
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
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
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Burger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(true)}
        >
          <span
            className={`block w-7 h-0.5 bg-current mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-current mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Nav with Headless UI Dialog */}
        <Dialog
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          className="relative z-50 md:hidden"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 flex justify-end">
            <Dialog.Panel className="w-4/5 max-w-xs h-full bg-white dark:bg-black shadow-lg pt-32 px-8 flex flex-col items-center transition-transform duration-300">
              <button
                className="absolute top-6 right-6 text-2xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
              <ul className="flex flex-col items-center gap-2 w-full">
                <li className="w-full flex justify-center mb-6">
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                    className="relative px-3 py-4 text-lg font-semibold transition-colors duration-300 hover:text-[#00ff99] group block text-center w-full"
                  >
                    {t("navHome")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                </li>
                <li className="w-full flex justify-center mb-6">
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, "about")}
                    className="relative px-3 py-4 text-lg font-semibold transition-colors duration-300 hover:text-[#00ff99] group block text-center w-full"
                  >
                    {t("navAbout")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                </li>
                <li className="w-full flex justify-center mb-6">
                  <a
                    href="#portfolio"
                    onClick={(e) => handleNavClick(e, "portfolio")}
                    className="relative px-3 py-4 text-lg font-semibold transition-colors duration-300 hover:text-[#00ff99] group block text-center w-full"
                  >
                    {t("navPortfolio")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                </li>
                <li className="w-full flex justify-center mb-6">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="relative px-3 py-4 text-lg font-semibold transition-colors duration-300 hover:text-[#00ff99] group block text-center w-full"
                  >
                    {t("navContact")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                </li>
                <li className="mt-8 w-full flex justify-center">
                  <LanguageSwitcher />
                </li>
              </ul>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
