import { motion } from "motion/react";
import { Instagram, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="contato">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Kaisei_Decol',sans-serif] font-bold text-5xl md:text-6xl text-[#727045] mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="font-['Montserrat',sans-serif] font-medium text-xl text-gray-600">
            Entre em contato e vamos criar memórias inesquecíveis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/juniufotografia/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-transparent hover:border-[#727045] transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-['Kaisei_Decol',sans-serif] font-bold text-lg text-[#727045] mb-2">
              Instagram
            </h3>
            <p className="font-['Montserrat',sans-serif] text-gray-600 text-sm">
              @juniufotografia
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:contato@juniorbrunow.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-transparent hover:border-[#727045] transition-all"
          >
            <div className="w-16 h-16 bg-[#727045] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-['Kaisei_Decol',sans-serif] font-bold text-lg text-[#727045] mb-2">
              Email
            </h3>
            <p className="font-['Montserrat',sans-serif] text-gray-600 text-sm">
              contato@juniorbrunow.com
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="https://api.whatsapp.com/send?phone=5527996042465&text=Ol%C3%A1%2C+estava+visitando+seu+site+e+me+interessei+pelo+seu+trabalho."
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-transparent hover:border-[#727045] transition-all"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-['Kaisei_Decol',sans-serif] font-bold text-lg text-[#727045] mb-2">
              WhatsApp
            </h3>
            <p className="font-['Montserrat',sans-serif] text-gray-600 text-sm">
              (27) 99604-2465
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
