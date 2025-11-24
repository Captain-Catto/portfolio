import { useMemo } from "react";
import { Experience, experiencesI18n } from "@/lib/data";
import { useTheme } from "@/contexts/ThemeContext";

export interface UseExperiencesReturn {
  experiences: Experience[];
  currentExperience: Experience | undefined;
  pastExperiences: Experience[];
  sortedExperiences: Experience[];
  loading: boolean;
  error: string | null;
}

export function useExperiences(): UseExperiencesReturn {
  const { language } = useTheme();

  // Get experiences directly from static data - no API call needed
  const experiences = useMemo(() => {
    const langExperiences =
      experiencesI18n[language as keyof typeof experiencesI18n] ||
      experiencesI18n.en;
    return [...langExperiences];
  }, [language]);

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      // Sort by start date (most recent first)
      return b.startDate.localeCompare(a.startDate);
    });
  }, [experiences]);

  const currentExperience = useMemo(() => {
    return experiences.find((exp: Experience) => !exp.endDate);
  }, [experiences]);

  const pastExperiences = useMemo(() => {
    return experiences.filter((exp: Experience) => exp.endDate);
  }, [experiences]);

  return {
    experiences: sortedExperiences,
    currentExperience,
    pastExperiences,
    sortedExperiences,
    loading: false, // No loading needed - data is static
    error: null, // No error possible - data is static
  };
}
