import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      style={{ opacity, scale }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-[#727045] text-white rounded-full p-4 shadow-2xl border-2 border-white"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
