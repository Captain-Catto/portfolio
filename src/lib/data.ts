// Portfolio data for bento grid layout
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[]; // Detailed features for each project
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  image: string;
  url?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "languages";
  icon?: string; // URL to skill icon (e.g., from skillicons.dev)
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  url?: string;
  startDate: string;
  endDate?: string; // undefined means "Present"
}

export interface Statistics {
  projects: number;
  happyClients: number;
  yearsExpertise: number;
}

export interface PersonalTag {
  icon: string; // SVG path or emoji
  label: string;
}

export interface GitHubInfo {
  username: string;
  profileUrl: string;
}

export const personalInfo = {
  name: "Le Quang Tri Dat",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  email: "lequangtridat@example.com",
  phone: "+84 123 456 789",
  location: "Ho Chi Minh City, Vietnam",
  timezone: "ICT (Indochina Time)",
  bio: "Passionate Full Stack developer with expertise in Node.js, React, Next.js, and modern web technologies. I love creating innovative solutions and learning new technologies.",
  avatar: "/portfolio.jpg",
  availabilityStatus: "Available",
  university:
    "Ho Chi Minh City University of Foreign Languages – Information Technology",
  languages: ["English", "Vietnamese"],
  cv: {
    english: "/CV-lequangtridat-eng.pdf",
    vietnamese: "/CV-lequangtridat-vie.pdf",
  },
  tags: [
    { icon: "��", label: "Ho Chi Minh City, Vietnam" },
    { icon: "🌐", label: "English & Vietnamese" },
    { icon: "💼", label: "Full Stack Developer" },
    { icon: "🎓", label: "HCMUFLIT" },
    { icon: "🕐", label: "ICT (Indochina Time)" },
  ] as PersonalTag[],
};

export const githubInfo: GitHubInfo = {
  username: "yourusername", // Replace with actual GitHub username
  profileUrl: "https://github.com/yourusername",
};

export const statistics: Statistics = {
  projects: 3,
  happyClients: 15,
  yearsExpertise: 2,
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "System Maintenance",
    company: "Circle",
    location: "Ho Chi Minh City, Vietnam",
    duration: "10/2025 - Present",
    description:
      "Nhận yêu cầu tính năng mới. Tự triển khai hoặc chuyển tiếp cho dev team phát triển. Test, validate và deploy vào hệ thống live.",
    startDate: "2025-10",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate Website",
    description:
      "The project allows users to browse, search, and view detailed information about properties for sale or rent.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "TailwindCSS",
      "JWT Authentication",
      "AWS S3",
    ],
    features: [
      "Developed RESTful APIs for core modules (Authentication, User, Post, Payment, Wallet) using Node.js, Express, TypeScript, and MongoDB.",
      "Implemented JWT authentication and detailed role-based access control (Admin, Employee, User).",
      "Integrated VNPay gateway sandbox for online payments.",
      "Enabled real-time notifications and updates via Socket.IO.",
      "Utilized AWS S3 for secure file and image storage.",
      "Applied Zod for robust data validation.",
      "Automated background jobs and payment cleanup with node-cron.",
      "Provided email notifications with Nodemailer.",
      "Supported flexible post management, search, and advanced filtering.",
    ],
    githubUrl: "https://github.com/example/real-estate",
    liveUrl: "https://real-estate.lequangtridat.com/",
    featured: true,
  },
  {
    id: 2,
    title: "MovieStream - Movie Streaming Platform",
    description:
      "A Netflix-style movie streaming platform with TMDB integration, real-time features and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Passport.js",
      "WebSocket",
    ],
    features: [
      "TMDB Sync: Auto-sync movies/TV từ TMDB API với cron jobs",
      "Smart Search: Tìm kiếm đa nội dung + lịch sử tìm kiếm",
      "Auth System: JWT authentication với bcrypt",
      "Favorites: Lưu phim yêu thích real-time",
      "Comments: Nested comments với like/dislike",
      "Notifications: Real-time với WebSocket",
      "Admin Dashboard: Analytics, user & content management",
      "Netflix-style responsive UI với smart auto-hide header",
      "Lazy loading + code splitting với repository pattern architecture",
      "Monorepo structure (Frontend + Backend)",
    ],
    githubUrl: "https://github.com/Captain-Catto/movie-backend",
    liveUrl: "https://movie.lequangtridat.com",
    featured: true,
  },
  {
    id: 3,
    title: "Starbucks Cups Ecommerce",
    description:
      "The project allows users to browse, search, and view detailed information about cups.",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Zod",
      "Node.js",
      "MySQL",
      "Sequelize",
      "Socket.IO",
      "TailwindCSS",
      "JWT Authentication",
    ],
    features: [
      "Phát triển trang bán cốc cho khách hàng với Node.js, MySQL, Next.js",
      "Triển khai JWT authentication với phân quyền chi tiết (SUPER_ADMIN, ADMIN, STAFF)",
      "Xây dựng thông báo real-time sử dụng Socket.IO cho cập nhật yêu cầu tư vấn tức thì",
      "Tích hợp Google Drive OAuth2 để lưu ảnh.",
      "Sử dụng Zod để kiểm tra đầu vào dữ liệu.",
      "Phát triển trang quản lý sản phẩm với tìm kiếm, lọc nâng cao, theo dõi tồn kho và cảnh báo hết hàng, thống kê, tạo đơn hàng",
    ],
    githubUrl: "https://github.com/example/starbucks-cups",
    liveUrl: "https://hasron.vn/",
    featured: true,
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "CSS (Basic) Certificate",
    issuer: "HackerRank",
    image: "/css-hackerank.png",
    url: "https://hackerrank.com/certificates/css",
  },
  {
    id: 2,
    name: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    image: "/javascript-hackerank.png",
    url: "https://hackerrank.com/certificates/javascript",
  },
  {
    id: 3,
    name: "React (Basic) Certificate",
    issuer: "HackerRank",
    image: "/React-Basic-Certificate.png",
    url: "https://hackerrank.com/certificates/react",
  },
  {
    id: 4,
    name: "React Certificate (Top 25%)",
    issuer: "TestDome",
    image: "/testdome-react.png",
    url: "https://testdome.com/certificates/react",
  },
];

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "Next.js",
    level: 90,
    category: "frontend",
    icon: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: "https://skillicons.dev/icons?i=typescript",
  },
  {
    name: "TailwindCSS",
    level: 90,
    category: "frontend",
    icon: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    name: "Redux Toolkit",
    level: 85,
    category: "frontend",
    icon: "https://skillicons.dev/icons?i=redux",
  },

  // Backend
  {
    name: "Node.js",
    level: 90,
    category: "backend",
    icon: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    name: "Express.js",
    level: 85,
    category: "backend",
    icon: "https://skillicons.dev/icons?i=express",
  },
  {
    name: "NestJS",
    level: 75,
    category: "backend",
    icon: "https://skillicons.dev/icons?i=nestjs",
  },
  {
    name: "Socket.IO",
    level: 80,
    category: "backend",
  },

  // Database
  {
    name: "MongoDB",
    level: 85,
    category: "database",
    icon: "https://skillicons.dev/icons?i=mongodb",
  },
  {
    name: "MySQL",
    level: 85,
    category: "database",
    icon: "https://skillicons.dev/icons?i=mysql",
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "database",
    icon: "https://skillicons.dev/icons?i=postgresql",
  },

  // Tools & Services
  {
    name: "Git",
    level: 85,
    category: "tools",
    icon: "https://skillicons.dev/icons?i=git",
  },
  {
    name: "AWS S3",
    level: 75,
    category: "tools",
    icon: "https://skillicons.dev/icons?i=aws",
  },
  {
    name: "JWT Authentication",
    level: 90,
    category: "tools",
  },

  // Languages
  {
    name: "JavaScript",
    level: 90,
    category: "languages",
    icon: "https://skillicons.dev/icons?i=javascript",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "languages",
    icon: "https://skillicons.dev/icons?i=typescript",
  },
];

export const socialLinks = {
  github: "https://github.com/lequangtridat",
  linkedin: "https://linkedin.com/in/lequangtridat",
  instagram: "https://www.instagram.com/lequangtridat/",
  email: "mailto:lequangtridat@example.com",
  phone: "tel:+84123456789",
};

// ===== I18N DATA =====
// Bilingual data for internationalization

// Real projects data - bilingual
export const projectsI18n = {
  en: [
    {
      id: 1,
      title: "Real Estate Website",
      description:
        "The project allows users to browse, search, and view detailed information about properties for sale or rent.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "TailwindCSS",
        "JWT Authentication",
        "AWS S3",
      ],
      features: [
        "Developed RESTful APIs for core modules (Authentication, User, Post, Payment, Wallet) using Node.js, Express, TypeScript, and MongoDB.",
        "Implemented JWT authentication and detailed role-based access control (Admin, Employee, User).",
        "Integrated VNPay gateway sandbox for online payments.",
        "Enabled real-time notifications and updates via Socket.IO.",
        "Utilized AWS S3 for secure file and image storage.",
        "Applied Zod for robust data validation.",
        "Automated background jobs and payment cleanup with node-cron.",
        "Provided email notifications with Nodemailer.",
        "Supported flexible post management, search, and advanced filtering.",
      ],
      githubUrl: "https://github.com/example/real-estate",
      liveUrl: "https://real-estate.lequangtridat.com/",
      featured: true,
    },
    {
      id: 2,
      title: "MovieStream - Movie Streaming Platform",
      description:
        "A Netflix-style movie streaming platform with TMDB integration, real-time features and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "Passport.js",
        "WebSocket",
      ],
      features: [
        "TMDB Sync: Auto-sync movies/TV from TMDB API with cron jobs",
        "Smart Search: Multi-content search + search history",
        "Auth System: JWT authentication with bcrypt",
        "Favorites: Save favorite movies in real-time",
        "Comments: Nested comments with like/dislike",
        "Notifications: Real-time with WebSocket",
        "Admin Dashboard: Analytics, user & content management",
        "Netflix-style responsive UI with smart auto-hide header",
        "Lazy loading + code splitting with repository pattern architecture",
        "Monorepo structure (Frontend + Backend)",
      ],
      githubUrl: "https://github.com/Captain-Catto/movie-backend",
      liveUrl: "https://movie.lequangtridat.com",
      featured: true,
    },
    {
      id: 3,
      title: "Starbucks Cups Ecommerce",
      description:
        "The project allows users to browse, search, and view detailed information about cups.",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "Zod",
        "Node.js",
        "MySQL",
        "Sequelize",
        "Socket.IO",
        "TailwindCSS",
        "JWT Authentication",
      ],
      features: [
        "Developed cups selling website for customers with Node.js, MySQL, Next.js",
        "Implemented JWT authentication with detailed role-based access control (SUPER_ADMIN, ADMIN, STAFF)",
        "Built real-time notifications using Socket.IO for instant consultation request updates",
        "Integrated Google Drive OAuth2 for image storage.",
        "Used Zod for data input validation.",
        "Developed product management page with search, advanced filtering, inventory tracking, low-stock alerts, statistics, and order creation",
      ],
      githubUrl: "https://github.com/example/starbucks-cups",
      liveUrl: "https://hasron.vn/",
      featured: true,
    },
  ] as Project[],

  vi: [
    {
      id: 1,
      title: "Website Bất Động Sản",
      description:
        "Dự án cho phép người dùng duyệt, tìm kiếm và xem thông tin chi tiết về các bất động sản đang bán hoặc cho thuê.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "TailwindCSS",
        "JWT Authentication",
        "AWS S3",
      ],
      features: [
        "Phát triển RESTful API cho (Xác thực, Người dùng, Bài đăng, Thanh toán, Ví) bằng Node.js, Express, TypeScript và MongoDB.",
        "Triển khai xác thực JWT và phân quyền chi tiết dựa trên vai trò (Quản trị viên, Nhân viên, Người dùng).",
        "Tích hợp cổng thanh toán VNPay (sandbox) cho giao dịch trực tuyến.",
        "Kích hoạt thông báo và cập nhật theo thời gian thực qua Socket.IO.",
        "Sử dụng AWS S3 để lưu trữ an toàn tệp và hình ảnh.",
        "Áp dụng Zod để xác thực dữ liệu mạnh mẽ.",
        "Tự động hóa các tác vụ nền và dọn dẹp thanh toán với node-cron.",
        "Cung cấp thông báo qua email với Nodemailer.",
        "Hỗ trợ quản lý bài đăng linh hoạt, tìm kiếm và lọc nâng cao.",
      ],
      githubUrl: "https://github.com/example/real-estate",
      liveUrl: "https://real-estate.lequangtridat.com/",
      featured: true,
    },
    {
      id: 2,
      title: "MovieStream - Nền Tảng Xem Phim",
      description:
        "Nền tảng xem phim phong cách Netflix với tích hợp TMDB, tính năng real-time và bảng điều khiển admin.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "Passport.js",
        "WebSocket",
      ],
      features: [
        "TMDB Sync: Tự động đồng bộ phim/TV từ TMDB API với cron jobs",
        "Smart Search: Tìm kiếm đa nội dung + lịch sử tìm kiếm",
        "Auth System: Xác thực JWT với bcrypt",
        "Favorites: Lưu phim yêu thích real-time",
        "Comments: Bình luận lồng nhau với like/dislike",
        "Notifications: Real-time với WebSocket",
        "Admin Dashboard: Phân tích, quản lý người dùng & nội dung",
        "Giao diện responsive phong cách Netflix với header tự ẩn thông minh",
        "Lazy loading + code splitting với kiến trúc repository pattern",
        "Cấu trúc Monorepo (Frontend + Backend)",
      ],
      githubUrl: "https://github.com/Captain-Catto/movie-backend",
      liveUrl: "https://movie.lequangtridat.com",
      featured: true,
    },
    {
      id: 3,
      title: "Thương Mại Điện Tử Cốc Starbucks",
      description:
        "Dự án cho phép người dùng duyệt, tìm kiếm và xem thông tin chi tiết về các loại cốc.",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "Zod",
        "Node.js",
        "MySQL",
        "Sequelize",
        "Socket.IO",
        "TailwindCSS",
        "JWT Authentication",
      ],
      features: [
        "Phát triển trang bán cốc cho khách hàng với Node.js, MySQL, Next.js",
        "Triển khai JWT authentication với phân quyền chi tiết (SUPER_ADMIN, ADMIN, STAFF)",
        "Xây dựng thông báo real-time sử dụng Socket.IO cho cập nhật yêu cầu tư vấn tức thì",
        "Tích hợp Google Drive OAuth2 để lưu ảnh.",
        "Sử dụng Zod để kiểm tra đầu vào dữ liệu.",
        "Phát triển trang quản lý sản phẩm với tìm kiếm, lọc nâng cao, theo dõi tồn kho và cảnh báo hết hàng, thống kê, tạo đơn hàng",
      ],
      githubUrl: "https://github.com/example/starbucks-cups",
      liveUrl: "https://hasron.vn/",
      featured: true,
    },
  ] as Project[],
};

// Bilingual experiences - based on projects data
export const experiencesI18n = {
  en: [
    {
      id: 1,
      title: "System Maintenance",
      company: "Circle",
      location: "Ho Chi Minh City, Vietnam",
      duration: "10/2025 - Present",
      description:
        "Receive new feature requests. Implement independently or forward to dev team for development. Test, validate and deploy to live system.",
      startDate: "2025-10",
    },
  ] as Experience[],

  vi: [
    {
      id: 1,
      title: "System Maintenance",
      company: "Circle",
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      duration: "10/2025 - Hiện tại",
      description:
        "Nhận yêu cầu tính năng mới. Tự triển khai hoặc chuyển tiếp cho dev team phát triển. Test, validate và deploy vào hệ thống live.",
      startDate: "2025-10",
    },
  ] as Experience[],
};

// Personal info i18n
export const personalInfoI18n = {
  en: {
    title: "Full Stack Developer",
    bio: "Passionate Full Stack developer with expertise in Node.js, React, Next.js, and modern web technologies. I love creating innovative solutions and learning new technologies.",
    availabilityStatus: "Available",
  },
  vi: {
    title: "Lập Trình Viên Full Stack",
    bio: "Lập trình viên Full Stack đam mê với chuyên môn về Node.js, React, Next.js và các công nghệ web hiện đại. Tôi yêu thích tạo ra các giải pháp sáng tạo và học hỏi công nghệ mới.",
    availabilityStatus: "Sẵn Sàng",
  },
};
