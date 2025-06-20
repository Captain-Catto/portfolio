"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Projects from "./Projects";
import CertificateGrid from "./Certificates";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const [tab, setTab] = useState(0);
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const TABS = [
    {
      labelKey: "projectsTab",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2 w-5 h-5"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      labelKey: "certificatesTab",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2 w-5 h-5"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      ),
    },
    {
      labelKey: "experienceTab",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2 w-5 h-5"
        >
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
          <path d="m7 16.5-4.74-2.85"></path>
          <path d="m7 16.5 5-3"></path>
          <path d="M7 16.5v5.17"></path>
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
          <path d="m17 16.5-5-3"></path>
          <path d="m17 16.5 4.74-2.85"></path>
          <path d="M17 16.5v5.17"></path>
          <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
          <path d="M12 8 7.26 5.15"></path>
          <path d="m12 8 4.74-2.85"></path>
          <path d="M12 13.5V8"></path>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full py-10 max-w-7xl mx-auto px-2 lg:px-4 xl:px-6 2xl:px-8"
      id="portfolio"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-transparent border-b border-white/10 mb-6"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-[#00ff99]">
            {t("portfolioTitle")}
          </h2>
          <p className="text-lg text-white/80">{t("portfolioDescription")}</p>
        </div>

        {/* Tabs */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex"
        >
          {TABS.map((tabItem, idx) => (
            <motion.button
              key={tabItem.labelKey}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex flex-col items-center py-3 px-2 font-medium transition-all duration-200 cursor-pointer
                ${
                  tab === idx
                    ? "text-[#00ff99] border-b-2 border-green-400 bg-white/5"
                    : "text-slate-300 hover:text-white"
                }
              `}
              onClick={() => setTab(idx)}
              aria-selected={tab === idx}
              role="tab"
              type="button"
            >
              {tabItem.icon}
              <span>{t(tabItem.labelKey)}</span>
            </motion.button>
          ))}
        </motion.nav>
      </motion.header>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-4"
      >
        {tab === 0 && <Projects />}
        {tab === 1 && <CertificateGrid />}
        {tab === 2 && (
          <div className="text-slate-300 text-center py-10">
            <h2 className="text-xl font-semibold mb-2">
              {t("experienceTitle")}
            </h2>
            <p>{t("comingSoon")}</p>
          </div>
        )}
      </motion.section>
    </motion.div>
  );
}
