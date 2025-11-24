import { useMemo } from "react";
import { Project, projectsI18n } from "@/lib/data";
import { useTheme } from "@/contexts/ThemeContext";

export interface UseProjectsReturn {
  projects: Project[];
  featuredProjects: Project[];
  nonFeaturedProjects: Project[];
  loading: boolean;
  error: string | null;
  getProjectById: (id: number) => Project | undefined;
  getProjectsByTechnology: (tech: string) => Project[];
}

export function useProjects(): UseProjectsReturn {
  const { language } = useTheme();

  // Get projects directly from static data - no API call needed
  const projects = useMemo(() => {
    const langProjects =
      projectsI18n[language as keyof typeof projectsI18n] || projectsI18n.en;
    return [...langProjects];
  }, [language]);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const nonFeaturedProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [projects]
  );

  const getProjectById = useMemo(
    () => (id: number) => projects.find((project) => project.id === id),
    [projects]
  );

  const getProjectsByTechnology = useMemo(
    () => (tech: string) =>
      projects.filter((project) =>
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(tech.toLowerCase())
        )
      ),
    [projects]
  );

  return {
    projects,
    featuredProjects,
    nonFeaturedProjects,
    loading: false, // No loading needed - data is static
    error: null, // No error possible - data is static
    getProjectById,
    getProjectsByTechnology,
  };
}
