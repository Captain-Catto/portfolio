"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-[#00ff99] mb-4">
            {t("aboutTitle")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-white/80 leading-relaxed text-lg">
              {t("aboutDescription")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
