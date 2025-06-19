"use client";

import { motion, useInView } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import TypingText from "./TypingText";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60 },
  },
};

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Captain-Catto",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/lequangtridat/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:lequangtridat2000@gmail.com",
    label: "Email",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/blakesinclair1995",
    label: "Facebook",
  },
];

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const roles = [t("role1"), t("role2"), t("role3")];
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // Function để xác định đường dẫn CV theo ngôn ngữ
  const getCVPath = () => {
    return language === "vi"
      ? "/CV-lequangtridat-vie.pdf"
      : "/CV-lequangtridat-eng.pdf";
  };

  // Function để xác định tên file khi tải xuống
  const getCVFileName = () => {
    return language === "vi"
      ? "CV-lequangtridat-vietnamese.pdf"
      : "CV-lequangtridat-english.pdf";
  };

  // Handler cho việc download CV
  const handleDownloadCV = () => {
    const cvPath = getCVPath();
    const fileName = getCVFileName();

    // Tạo link tạm thời để download
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="bg-white dark:bg-[#18191A] text-black dark:text-white flex flex-col justify-center font-mono pt-5"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto w-full px-3 md:px-6"
      >
        {/* Left: Animated Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col gap-0 w-full md:w-3/5 items-center md:items-start text-center md:text-left"
        >
          <TypingText roles={roles} />
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold m-0 leading-tight"
          >
            {t("greeting")} <br />
            <span className="text-[#00ff99]">{t("name")}</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-[#b0b0b0] mt-4 mb-8 text-base md:text-lg max-w-lg"
          >
            {t("description")}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto justify-center md:justify-start"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#00ff99",
                color: "#18191A",
              }}
              className="border border-[#00ff99] text-[#00ff99] px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-block mb-2 md:mb-0 cursor-pointer"
            >
              {t("downloadCV")}
            </motion.button>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#00ff99" }}
                  className="text-gray-500 dark:text-[#b0b0b0] text-2xl transition-colors duration-200"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Avatar with Animated Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:flex mt-8 md:mt-0 justify-center items-center w-full md:w-2/5 h-64 lg:h-80"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 506 506"
            fill="none"
            className="absolute"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={
                isInView
                  ? {
                      strokeDasharray: [
                        "15 120 25 25",
                        "16 25 92 72",
                        "4 250 22 22",
                      ],
                      rotate: [120, 360],
                    }
                  : {}
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ originX: "50%", originY: "50%" }}
            />
          </svg>
          <motion.img
            src="/4x6_1000.jpg"
            alt="Profile"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 lg:w-56 lg:h-56 rounded-full object-cover bg-[#222] relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* GitHub Calendar */}
      <div className="flex justify-center mt-8 md:mt-16 px-2 md:px-8 pb-4 md:pb-8 w-full">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto p-6"
          >
            <GitHubCalendar
              username="captain-catto"
              colorScheme="dark"
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
