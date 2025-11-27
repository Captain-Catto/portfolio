"use client";

import Image from "next/image";
import { Project } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col bg-card rounded-2xl border-2 border-border overflow-hidden h-full group hover:border-primary/50 transition-all duration-300">
      {/* Image Section - Fixed height instead of aspect-ratio */}
      <div className="relative w-full h-36 sm:h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-1.5 sm:gap-2 min-h-0 justify-between">
        {/* Title */}
        <h3 className="text-foreground font-bold text-base sm:text-lg leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed mb-1">
          {project.description}
        </p>

        {/* Detailed Features */}
        <div className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed space-y-1 overflow-y-auto scrollbar-hide max-h-50">
          {(project.features || []).map((feature, index) => (
            <div key={index} className="flex items-start gap-1.5 sm:gap-2">
              <span className="text-primary text-[10px] sm:text-xs mt-0.5 sm:mt-1 flex-shrink-0">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-1">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 border-border bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links Section */}
        <div className="flex gap-1.5 sm:gap-2 mt-auto">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 text-[10px] sm:text-xs bg-transparent border-border text-foreground hover:bg-muted hover:text-foreground h-7 sm:h-8"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1"
            >
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              Live Demo
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 text-[10px] sm:text-xs bg-transparent border-border text-foreground hover:bg-muted hover:text-foreground h-7 sm:h-8"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1"
            >
              <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              Source
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
