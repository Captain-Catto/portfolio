"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSkills } from "@/hooks/useSkills";
import { useTranslation } from "@/hooks/useTranslation";
import { CardLoadingSkeleton } from "@/components/LoadingSkeleton";

interface SkillsCardProps {
  className?: string;
}

export function SkillsCard({ className }: SkillsCardProps) {
  const { skills, loading, error } = useSkills();
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "bg-card border-2 border-border rounded-2xl h-full",
        "hidden xl:block",
        className
      )}
    >
      <div className="h-full flex flex-col pt-4 pb-2">
        {/* Header - Fixed */}
        <div className="border-b-2 border-border pb-2 px-4 flex-shrink-0">
          <div className="flex justify-center items-center gap-2">
            <svg
              className="text-primary size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path strokeLinecap="butt" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20.894 15.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m0 -4a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.552 3.775l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z"></path>
            </svg>
            <h2 className="font-medium text-foreground/80">
              {t("common.myStack")}
            </h2>
          </div>
        </div>

        {/* Skills Content - Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-4 min-h-0">
          {loading ? (
            <CardLoadingSkeleton />
          ) : error ? (
            <div className="text-destructive text-sm text-center py-4">
              {error}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-start gap-2 pb-2">
              {skills.map((skill, index) => (
                <article
                  key={index}
                  className={cn(
                    "rounded-lg shadow-md py-1 hover:bg-muted/30 transition-all duration-300 flex-shrink-0",
                    skill.icon ? "bg-muted/20 pl-1 pr-4" : "bg-muted/20 px-3"
                  )}
                >
                  <div className="flex justify-start items-center gap-1">
                    {skill.icon && (
                      <article className="bg-muted/30 rounded-lg p-2 shadow-md">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="size-6"
                          unoptimized
                        />
                      </article>
                    )}
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {skill.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
