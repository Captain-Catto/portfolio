"use client";

import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { useProjects } from "@/hooks/useProjects";

interface ProjectsGalleryProps {
  className?: string;
}

export function ProjectsGallery({ className }: ProjectsGalleryProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const { featuredProjects } = useProjects();

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-card border-2 border-border rounded-2xl h-full",
        className
      )}
    >
      <div className="h-full flex flex-col">
        {/* Swiper Container */}
        <div className="flex-1 relative px-3 py-3 flex flex-col min-h-0">
          {/* Project Swiper */}
          <div className="flex-1 overflow-hidden relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiperRef}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="projects-swiper !h-full"
              grabCursor={true}
              touchRatio={1}
              touchAngle={45}
              threshold={10}
            >
              {featuredProjects.map((project, index) => (
                <SwiperSlide key={project.id || index} className="!h-auto">
                  <div className="h-full">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
