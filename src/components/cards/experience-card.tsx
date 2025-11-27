"use client";

import { cn } from "@/lib/utils";
import { useExperiences } from "@/hooks/useExperiences";
import { useTranslation } from "@/hooks/useTranslation";
import { CardLoadingSkeleton } from "@/components/LoadingSkeleton";
import { BsSuitcaseLg } from "react-icons/bs";

interface ExperienceCardProps {
  className?: string;
}

export function ExperienceCard({ className }: ExperienceCardProps) {
  const { experiences, loading, error } = useExperiences();
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "bg-card border-2 border-border rounded-2xl h-full",
        className
      )}
    >
      <div className="pt-3 sm:pt-4 pb-2 h-full flex flex-col">
        {/* Header - Fixed */}
        <div className="border-b-2 border-border pb-2 px-3 sm:px-4 flex-shrink-0">
          <div className="flex justify-center items-center gap-2">
            <BsSuitcaseLg className="text-primary size-4 sm:size-5" />
            <h2 className="font-medium text-sm sm:text-base text-foreground/80">
              {t("common.experience")}
            </h2>
          </div>
        </div>

        {/* Experience Content - Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-3 sm:px-4 pt-3 sm:pt-4 min-h-0">
          {loading ? (
            <CardLoadingSkeleton />
          ) : error ? (
            <div className="text-destructive text-xs sm:text-sm text-center py-4">
              {error}
            </div>
          ) : (
            <div className={cn(
              "pb-2",
              experiences.length === 1 ? "h-full" : "space-y-3"
            )}>
              {experiences.map((exp) => {
                // Split description by periods to create bullet points
                const descriptionItems = exp.description
                  .split(".")
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0);

                return (
                  <div
                    key={exp.id}
                    className={cn(
                      "select-none rounded-2xl border-2 border-border p-2 sm:p-3 bg-card-secondary",
                      experiences.length === 1 && "h-full flex flex-col"
                    )}
                  >
                    <div className="relative flex justify-between gap-1 border-b-2 border-border pb-2">
                      <div className="flex items-start flex-col overflow-hidden">
                        <h3 className="font-medium text-[10px] sm:text-xs text-foreground overflow-hidden text-ellipsis whitespace-nowrap">
                          {exp.title}
                        </h3>
                        <p className="font-medium text-xs sm:text-sm text-foreground/80">
                          {exp.company}
                        </p>
                        <span className="font-medium text-[10px] sm:text-xs text-foreground/70">
                          {exp.location}
                        </span>
                      </div>
                      <span className="font-medium text-[10px] sm:text-xs text-foreground/70 whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className={cn(
                      "font-medium text-[10px] sm:text-xs text-foreground/70 text-left pt-2 space-y-1",
                      experiences.length === 1 ? "flex-1" : "min-h-[3.5rem]"
                    )}>
                      {descriptionItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
