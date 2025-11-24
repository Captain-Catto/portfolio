import { useMemo } from "react";
import { personalInfo, personalInfoI18n } from "@/lib/data";
import { useTheme } from "@/contexts/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons";

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
  ariaLabel: string;
}

export interface PersonalInfoData {
  name: string;
  title: string;
  avatar: string;
  availabilityStatus: string;
  cv: {
    english: string;
    vietnamese: string;
  };
  location: string;
  languages: string[];
  university: string;
  socialLinks: SocialLink[];
}

export interface UsePersonalInfoReturn extends PersonalInfoData {
  loading: boolean;
  error: string | null;
}

export function usePersonalInfo(): UsePersonalInfoReturn {
  const { language } = useTheme();

  // Get personal info directly from static data - no API call needed
  const personalData = useMemo(() => {
    const i18nData =
      personalInfoI18n[language as keyof typeof personalInfoI18n] ||
      personalInfoI18n.en;
    return {
      ...personalInfo,
      title: i18nData.title,
      availabilityStatus: i18nData.availabilityStatus,
    };
  }, [language]);

  const socialLinks = useMemo<SocialLink[]>(
    () => [
      {
        href: "https://github.com",
        icon: FaGithub,
        label: "GitHub",
        ariaLabel: "Visit GitHub profile",
      },
      {
        href: "https://linkedin.com",
        icon: FaLinkedin,
        label: "LinkedIn",
        ariaLabel: "Visit LinkedIn profile",
      },
      {
        href: "mailto:example@email.com",
        icon: FaEnvelope,
        label: "Email",
        ariaLabel: "Send email",
      },
      {
        href: "https://facebook.com",
        icon: FaFacebook,
        label: "Facebook",
        ariaLabel: "Visit Facebook profile",
      },
    ],
    []
  );

  return {
    name: personalData.name,
    title: personalData.title,
    avatar: personalData.avatar,
    availabilityStatus: personalData.availabilityStatus,
    cv: personalData.cv,
    location: personalData.location,
    languages: personalData.languages,
    university: personalData.university,
    socialLinks,
    loading: false, // No loading needed - data is static
    error: null, // No error possible - data is static
  };
}
