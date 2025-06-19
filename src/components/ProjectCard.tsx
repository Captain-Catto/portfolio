import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type ProjectCardProps = {
  projectKey: string;
  image: string;
  liveDemoUrl: string;
  detailsUrl: string;
};

export default function ProjectCard({
  projectKey,
  image,
  liveDemoUrl,
  detailsUrl,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="group relative w-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[#00ff99]/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/10 via-[#00ff99]/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={t(`projects.${projectKey}.title`)}
              width={400}
              height={240}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#00ff99] via-white to-[#00ff99] bg-clip-text text-transparent">
              {t(`projects.${projectKey}.title`)}
            </h3>
            <p className="text-[#00ff99]/80 text-sm leading-relaxed line-clamp-2">
              {t(`projects.${projectKey}.description`)}
            </p>
            <div className="pt-4 flex items-center justify-between">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#00ff99] hover:text-white transition-colors duration-200"
                aria-label={`${t("liveDemo")} ${t(
                  `projects.${projectKey}.title`
                )}`}
              >
                <span className="text-sm font-medium">{t("liveDemo")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link w-4 h-4"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
              <Link
                href={detailsUrl}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#00ff99]/10 hover:bg-[#00ff99]/20 text-[#00ff99] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00ff99]/50"
                data-discover="true"
                aria-label={`${t("details")} ${t(
                  `projects.${projectKey}.title`
                )}`}
              >
                <span className="text-sm font-medium">{t("details")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 border border-white/0 group-hover:border-[#00ff99]/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
}
