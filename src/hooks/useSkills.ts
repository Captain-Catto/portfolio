import { useMemo } from "react";
import { Skill, skills as staticSkills } from "@/lib/data";

export interface UseSkillsReturn {
  skills: Skill[];
  skillsByCategory: {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    tools: Skill[];
    languages: Skill[];
  };
  loading: boolean;
  error: string | null;
}

export function useSkills(): UseSkillsReturn {
  // Use static skills data directly - no API call needed
  const skills = useMemo(() => [...staticSkills], []);

  const skillsByCategory = useMemo(() => {
    return {
      frontend: skills.filter((skill) => skill.category === "frontend"),
      backend: skills.filter((skill) => skill.category === "backend"),
      database: skills.filter((skill) => skill.category === "database"),
      tools: skills.filter((skill) => skill.category === "tools"),
      languages: skills.filter((skill) => skill.category === "languages"),
    };
  }, [skills]);

  return {
    skills,
    skillsByCategory,
    loading: false, // No loading needed - data is static
    error: null, // No error possible - data is static
  };
}
