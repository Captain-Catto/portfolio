"use client";

import { certificates } from "@/lib/data";
import { useState, useEffect } from "react";
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
  const totalCards = 5; // Total number of cards (PersonalCard, SkillsCard, ExperienceCard, CertificatesCard, ProjectsGallery)

  useEffect(() => {
    // Wait for loading screen to complete (1 second for faster mobile experience)
    const loadingTimeout = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 1000);

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
      const baseDelay = i * 100; // Base delay between cards (reduced for faster loading)
      const randomDelay = Math.random() * 150; // Random delay for wave effect (reduced)
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

    // Safety fallback: ensure all cards are loaded after 2 seconds
    const fallbackTimeout = setTimeout(() => {
      setLoadedCards(Array.from({ length: totalCards }, (_, i) => i));
      console.log("Fallback: loaded all cards");
    }, 2000);

    return () => clearTimeout(fallbackTimeout);
  }, [isLoadingComplete, totalCards]);

  const isCardLoaded = (index: number) => loadedCards.includes(index);

  return (
    <main
      className={`flex justify-center md:items-center min-h-screen xl:h-screen p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 bg-background overflow-x-hidden transition-opacity duration-500 ${
        isLoadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full mx-auto xl:h-full max-w-[1920px]">
        <section className="xl:h-full py-4 md:py-0">
          <div className="select-none grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-3 xl:grid-cols-7 xl:grid-rows-5 xl:gap-3 text-center xl:h-full">
            {/* Personal Card - Top Center */}
            <div
              className={`min-h-[250px] sm:min-h-[280px] md:min-h-0 md:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 xl:col-span-3 xl:row-span-3 xl:col-start-3 xl:row-start-1`}
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

            {/* Skills Card */}
            <div
              className={`min-h-[280px] sm:min-h-[320px] md:min-h-0 md:col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-1 xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-1`}
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

            {/* Experience Card */}
            <div
              className={`min-h-[220px] sm:min-h-[250px] md:min-h-0 md:col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-2 xl:col-span-2 xl:row-span-3 xl:col-start-1 xl:row-start-3`}
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

            {/* Certificates Card */}
            <div
              className={`min-h-[250px] sm:min-h-[280px] md:min-h-0 md:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3 xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-4`}
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

            {/* Projects Gallery - Right Side */}
            <div
              className={`min-h-[400px] sm:min-h-[500px] md:min-h-0 md:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-2 xl:col-span-2 xl:row-span-5 xl:col-start-6 xl:row-start-1`}
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
