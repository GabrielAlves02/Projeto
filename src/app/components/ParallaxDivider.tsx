import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxDividerProps {
  image: string;
  text?: string;
}

export function ParallaxDivider({ image, text }: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="relative h-[400px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src={image}
          alt="Parallax divider"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {text && (
        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center"
        >
          <h3
            className="font-['Kaisei_Decol',sans-serif] font-bold text-white text-4xl md:text-5xl text-center px-4"
            style={{ textShadow: "0px 4px 8px rgba(0,0,0,0.5)" }}
          >
            {text}
          </h3>
        </motion.div>
      )}
    </div>
  );
}
