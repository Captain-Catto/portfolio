import { useMemo } from "react";
import { Certificate, certificates as staticCertificates } from "@/lib/data";

export interface UseCertificatesReturn {
  certificates: Certificate[];
  getCertificateById: (id: number) => Certificate | undefined;
  getCertificatesByIssuer: (issuer: string) => Certificate[];
  loading: boolean;
  error: string | null;
}

export function useCertificates(): UseCertificatesReturn {
  // Use static certificates data directly - no API call needed
  const certificates = useMemo(() => [...staticCertificates], []);

  const getCertificateById = useMemo(() => {
    return (id: number) => certificates.find((c) => c.id === id);
  }, [certificates]);

  const getCertificatesByIssuer = useMemo(() => {
    return (issuer: string) =>
      certificates.filter((c) =>
        c.issuer.toLowerCase().includes(issuer.toLowerCase())
      );
  }, [certificates]);

  return {
    certificates,
    getCertificateById,
    getCertificatesByIssuer,
    loading: false, // No loading needed - data is static
    error: null, // No error possible - data is static
  };
}
