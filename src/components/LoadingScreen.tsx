"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationId: number;
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);

      setProgress(progressValue);

      if (progressValue < 100) {
        animationId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    animationId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const getProgressColor = () => {
    return "bg-[#C1BAA1]";
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image
                src="/portfolio.jpg"
                alt="Le Quang Tri Dat"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Le Quang Tri Dat
            </h1>
            <p className="text-muted-foreground text-xl">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-80 max-w-[90vw]"
          >
            <div className="flex justify-between text-sm text-muted-foreground mb-3">
              <span>Loading Portfolio...</span>
              <span>{Math.round(progress)}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.1,
                  ease: "linear",
                }}
                className={`h-full ${getProgressColor()} rounded-full transition-colors duration-500`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
