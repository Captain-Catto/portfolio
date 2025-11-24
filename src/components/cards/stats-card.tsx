"use client";

import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  className?: string;
}

export function StatsCard({
  icon,
  label,
  value,
  suffix = "+",
  className,
}: StatsCardProps) {
  const { ref, count } = useCounterAnimation({ end: value, duration: 2000 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card border-2 border-border rounded-2xl flex flex-col justify-center items-center h-full p-4",
        "hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      <div className="flex justify-center items-center gap-[1px]">
        <h2 className="counter min-w-[1ch] text-center transition-transform duration-300 font-medium text-foreground text-[65px] leading-tight">
          {String(count).padStart(2, "0")}
        </h2>
        <span className="text-primary font-medium text-5xl">{suffix}</span>
      </div>

      <div className="flex flex-wrap justify-center items-center px-1 mt-2">
        <article className="bg-muted/20 rounded-full shadow-md py-1 px-3 hover:bg-muted/30 transition-all duration-300">
          <span className="flex justify-evenly items-center gap-[2px]">
            <span className="size-5 text-primary">{icon}</span>
            <span className="font-medium text-xs text-muted-foreground">
              {label}
            </span>
          </span>
        </article>
      </div>
    </div>
  );
}
