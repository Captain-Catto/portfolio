import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/app/data/projects";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.key}
            projectKey={project.key}
            image={project.image}
            liveDemoUrl={project.liveDemoUrl}
            detailsUrl={project.detailsUrl}
          />
        ))}
      </div>
      {!showAll && projects.length > 3 && (
        <div className="mt-6 w-full flex justify-start">
          <button
            className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
            onClick={() => setShowAll(true)}
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("seeMore")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99]/50 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
