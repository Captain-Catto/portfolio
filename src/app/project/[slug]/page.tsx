import { projectDetails } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailWrapper from "./ProjectDetailWrapper";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Tìm project theo slug
  const project = projectDetails.find((p) => p.key === params.slug);

  // Nếu không tìm thấy project, hiển thị 404
  if (!project) {
    return notFound();
  }

  // Render wrapper component với slug
  return <ProjectDetailWrapper slug={params.slug} />;
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.key,
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectDetails.find((p) => p.key === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}
