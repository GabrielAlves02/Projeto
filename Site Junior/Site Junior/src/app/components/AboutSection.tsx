import { motion } from "motion/react";
import imgAbout from "../../assets/4e78fd365b851a32528e4d3d06060036a72e2be1.png";

export function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="sobre">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgAbout}
          alt="About Junior Brunow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-['Kaisei_Decol',sans-serif] font-bold text-white text-5xl md:text-6xl mb-8"
            style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
          >
            Sobre Mim
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
          >
            <p
              className="font-['Montserrat',sans-serif] font-medium text-white text-lg md:text-xl leading-relaxed mb-6"
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Tenho 25 anos e atuo como fotógrafo desde 2017, com experiência em diferentes segmentos.
              Desde criança, a fotografia sempre despertou minha curiosidade e, com o tempo, essa admiração se
              transformou em uma verdadeira paixão.
            </p>
            <p
              className="font-['Montserrat',sans-serif] font-medium text-white text-lg md:text-xl leading-relaxed"
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Registrar casamentos é algo que me move profundamente. Cada detalhe, cada olhar e cada emoção são
              capturados com atenção, sensibilidade e todo o amor que coloco no meu trabalho.
            </p>
            <p
              className="font-['Montserrat',sans-serif] font-medium text-white text-lg md:text-xl leading-relaxed"
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Para mim, a fotografia vai muito além de imagens bonitas: é a arte de eternizar histórias e
              sentimentos, criando lembranças que poderão ser revividas por toda a vida.
            </p>
          </motion.div>

          <motion.a
            href="#contato"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-white/10 backdrop-blur-sm border-2 border-white rounded-full px-8 py-4 transition-all"
          >
            <span className="font-['Kaisei_Decol',sans-serif] font-bold text-white text-base">
              Vamos Conversar
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
