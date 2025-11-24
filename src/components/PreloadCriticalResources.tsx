"use client";

import { useEffect } from "react";

export function PreloadCriticalResources() {
  useEffect(() => {
    // Preload critical images
    const imagePreloads = ["/portfolio.jpg", "/next.svg"];

    imagePreloads.forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = image;
      link.as = "image";
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefeches = [
      "https://images.unsplash.com",
      "https://skillicons.dev",
    ];

    dnsPrefeches.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null; // This component doesn't render anything
}
