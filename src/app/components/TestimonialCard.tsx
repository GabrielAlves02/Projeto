import { motion } from "motion/react";

interface TestimonialCardProps {
  image: string;
  text: string;
  author: string;
  index: number;
}

export function TestimonialCard({ image, text, author, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex-shrink-0 w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-8"
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-[372px] h-[496px] overflow-hidden rounded-lg shadow-2xl"
      >
        <img
          src={image}
          alt={`Testimonial by ${author}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className="flex-1 bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-[505px]"
      >
        <p className="font-['Kaisei_Decol',sans-serif] font-bold text-black text-sm leading-relaxed mb-6">
          {text}
        </p>
        <p className="font-['Kaisei_Decol',sans-serif] font-bold text-black text-sm text-center">
          {author}
        </p>
      </motion.div>
    </motion.div>
  );
}
