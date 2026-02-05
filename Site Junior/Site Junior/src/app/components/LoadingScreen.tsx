import { motion } from "motion/react";
import imgLogo from "../../assets/2426d286e3a3b69b0f41f01ce585d555fef496c5.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-[100] bg-[#727045] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mb-6"
        >
          <img src={imgLogo} alt="Junior Brunow" className="w-full h-full object-contain" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-['Kaisei_Decol',sans-serif] font-bold text-white text-2xl text-center"
        >
          Junior Brunow
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
