"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function ContactMotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  // Handler functions for contact actions
  const handlePhoneClick = () => {
    window.open("tel:+84906862256", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:lequangtridat2000@gmail.com", "_self");
  };

  const handleAddressClick = () => {
    const address = "783 Trần Xuân Soạn, Tân Hưng, Quận 7, Hồ Chí Minh";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formRef.current) return;

      console.log(formRef.current);
      // Thay thế các giá trị này bằng thông tin từ EmailJS
      const result = await emailjs.sendForm(
        "service_i1qaxvl", // Service ID từ EmailJS
        "template_so4jhj4", // Template ID từ EmailJS
        formRef.current,
        "vElkKEWsFDF-Uzd7B" // Public Key từ EmailJS
      );

      console.log("Email sent successfully:", result);
      setSent(true);

      // Reset form sau 5 giây
      setTimeout(() => {
        setSent(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setError(
        t("emailSendError") || "Failed to send email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg backdrop-blur-md flex flex-col md:flex-row gap-10"
    >
      {/* Contact Info - giữ nguyên */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <h2 className="text-2xl font-bold text-[#00ff99] text-center md:text-left">
          {t("contactTitle")}
        </h2>

        {/* Phone */}
        <motion.div
          onClick={handlePhoneClick}
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-4 cursor-pointer group transition-all duration-300 hover:bg-white/5 p-3 rounded-lg"
        >
          <div className="bg-white/10 group-hover:bg-[#00ff99]/20 rounded-lg p-3 flex items-center justify-center transition-all duration-300">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#00ff99"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.06.73 3.03a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.97.36 1.98.6 3.03.73A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
              {t("contactPhone")}
            </div>
            <div className="text-base text-[#00ff99] font-mono group-hover:text-[#00ff99] transition-colors">
              090 686 2256
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          onClick={handleEmailClick}
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-4 cursor-pointer group transition-all duration-300 hover:bg-white/5 p-3 rounded-lg"
        >
          <div className="bg-white/10 group-hover:bg-[#00ff99]/20 rounded-lg p-3 flex items-center justify-center transition-all duration-300">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#00ff99"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
              {t("contactEmail")}
            </div>
            <div className="text-base text-[#00ff99] font-mono group-hover:text-[#00ff99] transition-colors break-all">
              lequangtridat2000@gmail.com
            </div>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          onClick={handleAddressClick}
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-4 cursor-pointer group transition-all duration-300 hover:bg-white/5 p-3 rounded-lg"
        >
          <div className="bg-white/10 group-hover:bg-[#00ff99]/20 rounded-lg p-3 flex items-center justify-center transition-all duration-300">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#00ff99"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
              {t("contactAddress")}
            </div>
            <div className="text-base text-[#00ff99] font-mono group-hover:text-[#00ff99] transition-colors">
              783 Trần Xuân Soạn, Tân Hưng, Quận 7
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2">
        {sent ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-4"
          >
            <div className="text-[#00ff99] font-semibold text-lg">
              {t("thankYou")}
            </div>
            <div className="text-white/60 text-sm">
              {t("emailSentSuccess") ||
                "Your message has been sent successfully!"}
            </div>
          </motion.div>
        ) : (
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-400 text-sm text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20">
                {error}
              </div>
            )}

            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="text"
              name="user_name"
              placeholder={t("namePlaceholder")}
              required
              disabled={loading}
              className="flex min-h-[60px] w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-[#00ff99] placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff99] focus-visible:ring-offset-0 shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            />

            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="email"
              name="user_email"
              placeholder={t("emailPlaceholder")}
              required
              disabled={loading}
              className="flex min-h-[60px] w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-[#00ff99] placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff99] focus-visible:ring-offset-0 shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            />

            <motion.textarea
              whileFocus={{ scale: 1.03 }}
              name="message"
              placeholder={t("messagePlaceholder")}
              required
              rows={4}
              disabled={loading}
              className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-[#00ff99] placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff99] focus-visible:ring-offset-0 shadow-lg disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />

            <motion.button
              whileHover={
                !loading
                  ? {
                      scale: 1.05,
                      backgroundColor: "#00ff99",
                      color: "#222",
                    }
                  : {}
              }
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full border border-[#00ff99] text-[#00ff99] font-semibold transition-all duration-200 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#00ff99]"></div>
                  {t("sending") || "Sending..."}
                </>
              ) : (
                t("sendMessage")
              )}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
