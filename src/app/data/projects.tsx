export interface Project {
  key: string;
  image: string;
  liveDemoUrl: string;
  detailsUrl?: string;
  github?: string;
  technologies?: string[];
  featured?: boolean;
}

export interface ProjectDetail {
  key: string;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github?: string;
  technologies: string[];
  featureKeys: string[];
  totalTech: number;
  keyFeatures: number;
}

export const projects: Project[] = [
  {
    key: "online-store",
    image: "/online-store.png",
    liveDemoUrl: "https://online-store.lequangtridat.com",
    detailsUrl: "/project/online-store",
    github: "https://github.com/your-username/online-store",
    technologies: ["React", "Node.js", "MySql", "Express", "Tailwind CSS"],
    featured: true,
  },
  // Thêm các dự án khác...
];

export const projectDetails: ProjectDetail[] = [
  {
    key: "online-store",
    title: "Online Store",
    description:
      "A modern e-commerce platform with full shopping cart functionality, payment integration, and user management.",
    image: "/online-store.png",
    liveDemo: "https://online-store.lequangtridat.com",
    github: "https://github.com/username/online-store",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "Express",
      "Sequelize",
      "Tailwind CSS",
    ],
    featureKeys: [
      "onlineStore.shoppingCart",
      "onlineStore.paymentIntegration",
      "onlineStore.userAuth",
      "onlineStore.responsiveDesign",
      "onlineStore.productSearch",
      "onlineStore.adminDashboard",
    ],
    totalTech: 5,
    keyFeatures: 6,
  },
  // Thêm các project detail khác...
];

// Helper function để tìm project detail theo slug
export const getProjectDetailBySlug = (slug: string): ProjectDetail | null => {
  return projectDetails.find((project) => project.key === slug) || null;
};
