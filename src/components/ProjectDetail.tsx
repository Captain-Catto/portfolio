"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { getProjectDetailBySlug } from "@/app/data/projects";

interface ProjectDetailProps {
  projectSlug: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectSlug,
  onBack,
}) => {
  const { t, language, setLanguage } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const router = useRouter();

  // Tìm project data theo slug
  const project = getProjectDetailBySlug(projectSlug);

  const handlePortfolioClick = () => {
    router.push("/#portfolio");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  const getFeatureText = (featureKey: string) => {
    return t(`projectFeatures.${featureKey}`) || featureKey;
  };

  if (!project) {
    return (
      <section className="bg-white dark:bg-[#18191A] text-black dark:text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#00ff99] text-white rounded-lg hover:bg-[#00ff99]/80 transition-colors cursor-pointer"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-[#18191A] text-black dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Breadcrumb và Language Switcher */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          {/* Breadcrumb bên trái */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={onBack}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-[#00ff99]/10 hover:text-[#00ff99] hover:border-[#00ff99]/30 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm md:text-base cursor-pointer"
            >
              <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t("back") || "Back"}</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
              <button
                onClick={handlePortfolioClick}
                className="relative px-2 py-1 transition-colors duration-300 hover:text-[#00ff99] group cursor-pointer"
              >
                {t("navPortfolio") || "Portfolio"}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-gray-900 dark:text-gray-100 truncate">
                {project.title}
              </span>
            </div>
          </div>

          {/* Language Switcher bên phải */}
          <button
            onClick={toggleLanguage}
            className="p-2 md:p-3 rounded-xl font-semibold text-gray-800 dark:text-gray-200 hover:bg-[#00ff99]/10 hover:text-[#00ff99] hover:border-[#00ff99]/30 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm md:text-base min-w-[50px] md:min-w-[60px] cursor-pointer"
          >
            {language.toUpperCase()}
          </button>
        </motion.div>

        {/* Main Content - giữ nguyên phần còn lại */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-16"
        >
          {/* Left Column */}
          <div className="space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h1>
              <div className="relative h-1 w-16 md:w-24">
                <div className="absolute inset-0 bg-[#00ff99] rounded-full"></div>
                <div className="absolute inset-0 bg-[#00ff99] rounded-full blur-sm"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="flex items-center space-x-2 md:space-x-3 bg-white dark:bg-gray-700 p-2 md:p-3 rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-105">
                <div className="bg-[#00ff99]/20 p-1.5 md:p-2 rounded-full">
                  <FaCode className="text-[#00ff99] w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex-grow">
                  <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {project.totalTech}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                    {t("totalTechnology")}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-white dark:bg-gray-700 p-2 md:p-3 rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-105">
                <div className="bg-[#00ff99]/20 p-1.5 md:p-2 rounded-full">
                  <FaStar className="text-[#00ff99] w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex-grow">
                  <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {project.keyFeatures}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                    {t("keyFeatures")}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-[#00ff99]/10 hover:bg-[#00ff99]/20 text-[#00ff99] rounded-xl transition-all duration-300 border border-[#00ff99]/20 hover:border-[#00ff99]/40 overflow-hidden text-sm md:text-base"
              >
                <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">{t("liveDemo")}</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden text-sm md:text-base"
                >
                  <FaGithub className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">Github</span>
                </a>
              )}
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4 md:space-y-6"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                <FaCode className="w-4 h-4 md:w-5 md:h-5 text-[#00ff99]" />
                {t("technologiesUsed")}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-[#00ff99]/10 rounded-xl border border-[#00ff99]/20 hover:border-[#00ff99]/40 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs md:text-sm font-medium text-[#00ff99] group-hover:text-[#00ff99] transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ff99]/20 transition-colors duration-300 rounded-2xl"></div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 space-y-6 hover:border-[#00ff99]/20 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                <FaStar className="w-5 h-5 text-[#00ff99]" />
                {t("keyFeatures")}
              </h3>
              <ul className="list-none space-y-2">
                {project.featureKeys.map((featureKey, index) => (
                  <li
                    key={index}
                    className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                  >
                    <div className="relative mt-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00ff99] group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {getFeatureText(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
