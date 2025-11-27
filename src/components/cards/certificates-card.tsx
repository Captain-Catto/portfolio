"use client";

import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useCertificates } from "@/hooks/useCertificates";
import { Certificate } from "@/lib/data";
import { useTranslation } from "@/hooks/useTranslation";
import { CardLoadingSkeleton } from "@/components/LoadingSkeleton";

interface CertificatesCardProps {
  className?: string;
  onCertificateClick?: (certificate: Certificate) => void;
}

export type { CertificatesCardProps };

export function CertificatesCard({
  className,
  onCertificateClick,
}: CertificatesCardProps) {
  const { certificates, loading, error } = useCertificates();
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "bg-card border-2 border-border rounded-2xl h-full",
        className
      )}
    >
      <div className="pt-3 sm:pt-4 pb-3 sm:pb-4 h-full flex flex-col">
        {/* Header */}
        <div className="px-3 sm:px-4 pb-2 sm:pb-3 border-b border-border">
          <h3 className="text-foreground font-bold text-base sm:text-lg">
            {t("common.certificates")}
          </h3>
        </div>

        {/* Certificate Images Swiper */}
        <div className="flex-1 px-3 sm:px-4 pt-3 sm:pt-4 relative min-h-0">
          {loading ? (
            <CardLoadingSkeleton />
          ) : error ? (
            <div className="text-destructive text-xs sm:text-sm text-center py-4">
              {error}
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="certificates-swiper !h-full"
            >
              {certificates.map((cert) => (
                <SwiperSlide key={cert.id} className="!flex !items-center !justify-center">
                  <div
                    className="bg-muted rounded-lg border border-border overflow-hidden w-full h-full cursor-pointer hover:border-primary/50 transition-all duration-300 relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
                    onClick={() => onCertificateClick?.(cert)}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjEyMTIxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYXRlPC90ZXh0Pjwvc3ZnPg==";
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-muted/50 hover:bg-muted/70 rounded-full flex items-center justify-center text-foreground transition-all duration-300 backdrop-blur-sm cursor-pointer">
            <svg
              width="14"
              height="14"
              className="sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-muted/50 hover:bg-muted/70 rounded-full flex items-center justify-center text-foreground transition-all duration-300 backdrop-blur-sm cursor-pointer">
            <svg
              width="14"
              height="14"
              className="sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Add global styles for Swiper height
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    .certificates-swiper {
      height: 100% !important;
    }
    .certificates-swiper .swiper-wrapper {
      height: 100% !important;
    }
    .certificates-swiper .swiper-slide {
      height: auto !important;
      display: flex !important;
      flex-direction: column !important;
    }
  `;
  if (!document.head.querySelector("style[data-swiper-certificates]")) {
    style.setAttribute("data-swiper-certificates", "true");
    document.head.appendChild(style);
  }
}
