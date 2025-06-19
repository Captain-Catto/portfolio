import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

type Certificate = {
  image: string;
  alt: string;
  animation: string;
  duration: string;
};

const certificates: Certificate[] = [
  {
    image: "/React-Basic-Certificate.png",
    alt: "React Basic Certificate",
    animation: "fade-up-right",
    duration: "1000",
  },
  {
    image: "/javascript-hackerank.png",
    alt: "JavaScript HackerRank Certificate",
    animation: "fade-up",
    duration: "1200",
  },
  {
    image: "/css-hackerank.png",
    alt: "CSS HackerRank Certificate",
    animation: "fade-up-left",
    duration: "1000",
  },
  {
    image: "/testdome-react.png", // Thay bằng tên file hình ảnh TestDome của bạn
    alt: "React TestDome Certificate",
    animation: "fade-up",
    duration: "1000",
  },
];

function CertificateCard({ image, alt, animation, duration }: Certificate) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Đóng modal khi click outside
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div
        data-aos={animation}
        data-aos-duration={duration}
        className="relative group w-full cursor-pointer"
        onClick={openModal}
      >
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src={image}
            alt={alt}
            width={400}
            height={250}
            className="w-full h-auto object-cover transition-all duration-300 filter contrast-110 brightness-90 saturate-110 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
            <div className="flex flex-col items-center text-white">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
              <span className="text-lg font-semibold">
                {t("viewCertificate")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal phóng to hình ảnh */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[85vh] flex flex-col">
            {/* Nút đóng */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Container cho hình ảnh */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="relative max-w-full max-h-full">
                <Image
                  src={image}
                  alt={alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Title ở dưới */}
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-b-lg mt-2">
              <h3 className="text-white text-lg font-semibold text-center">
                {alt}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function CertificateGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);
  const { t } = useLanguage();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
        {visibleCertificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} {...cert} />
        ))}
      </div>
      {!showAll && certificates.length > 3 && (
        <div className="mt-6 w-full flex justify-center">
          <button
            className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
            onClick={() => setShowAll(true)}
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("seeMore")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500/50 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      )}
    </div>
  );
}
