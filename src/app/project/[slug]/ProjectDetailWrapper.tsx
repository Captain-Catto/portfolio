"use client";

import { useRouter } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";

interface ProjectDetailWrapperProps {
  slug: string;
}

export default function ProjectDetailWrapper({
  slug,
}: ProjectDetailWrapperProps) {
  const router = useRouter();

  const handleBack = () => {
    // Có thể chọn 1 trong 2 cách:
    router.back(); // Quay lại trang trước đó
    // hoặc
    // router.push("/"); // Về trang home
  };

  return <ProjectDetail projectSlug={slug} onBack={handleBack} />;
}
