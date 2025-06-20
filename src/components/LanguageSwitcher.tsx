"use client";

import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full font-semibold text-gray-200 hover:bg-gray-700"
    >
      {language.toUpperCase()}
    </button>
  );
};
