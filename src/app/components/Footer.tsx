import { motion } from "motion/react";
import imgLogo from "../../assets/2426d286e3a3b69b0f41f01ce585d555fef496c5.png";

export function Footer() {
  return (
    <footer className="bg-[#727045] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12"
          >
            <img src={imgLogo} alt="Junior Brunow" className="w-full h-full object-contain" />
          </motion.div>

          {/* Copyright */}
          <p className="font-['Kaisei_Decol',sans-serif] text-white text-sm text-center">
            © {new Date().getFullYear()} Junior Brunow Fotógrafo. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <motion.a
              href="https://www.instagram.com/juniufotografia/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-black transition-colors"
            >
              <span className="font-['Kaisei_Decol',sans-serif] text-sm">Instagram</span>
            </motion.a>
            <motion.a
              href="mailto:contato@juniorbrunow.com"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-black transition-colors"
            >
              <span className="font-['Kaisei_Decol',sans-serif] text-sm">Email</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
