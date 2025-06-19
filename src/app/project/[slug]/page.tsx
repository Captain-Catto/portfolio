import { projectDetails } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailWrapper from "./ProjectDetailWrapper";

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params vì nó là Promise
  const { slug } = await params;

  // Tìm project theo slug
  const project = projectDetails.find((p) => p.key === slug);

  // Nếu không tìm thấy project, hiển thị 404
  if (!project) {
    return notFound();
  }

  // Render wrapper component với slug
  return <ProjectDetailWrapper slug={slug} />;
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
  params: Promise<{ slug: string }>;
}) {
  // Await params vì nó là Promise
  const { slug } = await params;
  
  const project = projectDetails.find((p) => p.key === slug);

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