"use client";

import { statistics, certificates } from "@/lib/data";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { PersonalCard } from "@/components/cards/personal-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { ProjectsGallery } from "@/components/cards/projects-gallery";
import { CertificatesCard } from "@/components/cards/certificates-card";
import { CertificateModal } from "@/components/CertificateModal";

export default function Home() {
  const [loadedCards, setLoadedCards] = useState<number[]>([]);
  const [selectedCertificateImage, setSelectedCertificateImage] = useState<
    string | null
  >(null);
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState<
    number
  >(-1);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const totalCards = 8; // Total number of cards
  const { language } = useTheme();

  useEffect(() => {
    // Wait for loading screen to complete (2.5 seconds total including fade out)
    const loadingTimeout = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 2500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    // Only start card animations after loading is complete
    if (!isLoadingComplete) return;

    console.log("Starting card animations...");

    // Generate random order for cards with staggered delays
    const cardOrder = Array.from({ length: totalCards }, (_, i) => i);
    const shuffled = cardOrder.sort(() => Math.random() - 0.5);

    console.log("Card order:", shuffled);

    // Show cards one by one with random delays for wave effect
    shuffled.forEach((cardIndex, i) => {
      const baseDelay = i * 150; // Base delay between cards
      const randomDelay = Math.random() * 300; // Random delay for wave effect
      const totalDelay = baseDelay + randomDelay;

      setTimeout(() => {
        console.log(`Loading card ${cardIndex}`);
        setLoadedCards((prev) => {
          const newLoaded = [...prev, cardIndex];
          console.log("Loaded cards:", newLoaded);
          return newLoaded;
        });
      }, totalDelay);
    });
  }, [isLoadingComplete]);

  const isCardLoaded = (index: number) => loadedCards.includes(index);

  const translations = {
    en: {
      projects: "Projects",
      happyClients: "Happy Clients",
      yearsExpertise: "Year Expertise",
    },
    vi: {
      projects: "Dự Án",
      happyClients: "Khách Hàng Hài Lòng",
      yearsExpertise: "Năm Kinh Nghiệm",
    },
  };

  const t = translations[language];

  return (
    <main
      className={`flex justify-center items-center h-screen p-3 lg:p-4 xl:p-5 bg-background overflow-hidden transition-opacity duration-500 ${
        isLoadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full mx-auto h-full">
        <section className="h-full">
          <div className="select-none grid gap-3 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-5 xl:gap-3 text-center h-full max-h-full">
            {/* Personal Card - Top Center (xl:col-span-3 xl:row-span-2) */}
            <div
              className={`xl:col-span-3 xl:row-span-3 xl:col-start-3 xl:row-start-1`}
              style={{
                opacity: isCardLoaded(0) ? 1 : 0,
                transform: `translateY(${isCardLoaded(0) ? 0 : 20}px) scale(${
                  isCardLoaded(0) ? 1 : 0.95
                })`,
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <PersonalCard className="h-full" />
            </div>

            {/* Experience Card (xl:col-span-2 xl:row-span-3) */}
            <div
              className={`xl:col-span-2 xl:row-span-3 xl:col-start-1 xl:row-start-3`}
              style={{
                opacity: isCardLoaded(1) ? 1 : 0,
                transform: `translateY(${isCardLoaded(1) ? 0 : 20}px) scale(${
                  isCardLoaded(1) ? 1 : 0.95
                })`,
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <ExperienceCard className="h-full" />
            </div>

            {/* Skills Card (xl:col-span-2 xl:row-span-2) */}
            <div
              className={`xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-1`}
              style={{
                opacity: isCardLoaded(2) ? 1 : 0,
                transform: `translateY(${isCardLoaded(2) ? 0 : 20}px) scale(${
                  isCardLoaded(2) ? 1 : 0.95
                })`,
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <SkillsCard className="h-full" />
            </div>

            {/* Certificates Card - Bottom Left (xl:col-span-2 xl:row-span-2) */}
            <div
              className={`xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-4`}
              style={{
                opacity: isCardLoaded(3) ? 1 : 0,
                transform: `translateY(${isCardLoaded(3) ? 0 : 20}px) scale(${
                  isCardLoaded(3) ? 1 : 0.95
                })`,
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <CertificatesCard
                className="h-full"
                onCertificateClick={(cert) => {
                  const index = certificates.findIndex((c) => c.id === cert.id);
                  setSelectedCertificateIndex(index);
                  setSelectedCertificateImage(cert.image);
                }}
              />
            </div>

            {/* Projects Gallery - Right Side (xl:col-span-2 xl:row-span-5) */}
            <div
              className={`xl:col-span-2 xl:row-span-5 xl:col-start-6 xl:row-start-1`}
              style={{
                opacity: isCardLoaded(4) ? 1 : 0,
                transform: `translateY(${isCardLoaded(4) ? 0 : 20}px) scale(${
                  isCardLoaded(4) ? 1 : 0.95
                })`,
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <ProjectsGallery className="h-full" />
            </div>
          </div>
        </section>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        imageUrl={selectedCertificateImage}
        onClose={() => {
          setSelectedCertificateImage(null);
          setSelectedCertificateIndex(-1);
        }}
        onNext={() => {
          const nextIndex = (selectedCertificateIndex + 1) % certificates.length;
          setSelectedCertificateIndex(nextIndex);
          setSelectedCertificateImage(certificates[nextIndex].image);
        }}
        onPrevious={() => {
          const prevIndex =
            (selectedCertificateIndex - 1 + certificates.length) %
            certificates.length;
          setSelectedCertificateIndex(prevIndex);
          setSelectedCertificateImage(certificates[prevIndex].image);
        }}
        currentIndex={selectedCertificateIndex}
        totalCount={certificates.length}
      />
    </main>
  );
}
