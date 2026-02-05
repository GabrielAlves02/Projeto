import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks";
import img1 from "../../assets/WhatsApp Image 2026-02-05 at 16.04.58 (1).jpeg";
import img2 from "../../assets/WhatsApp Image 2026-02-05 at 16.04.58.jpeg";
import img3 from "../../assets/cf14d0de65c562d2d4c8bc5cd91b8250b915acab.png";

const testimonials = [
  {
    image: img1,
    text: "Recomendo o Junior de olhos fechados! Sou extremamente fã do seu trabalho e grata por ter o tido como fotógrafo do meu pré-wedding e do meu casamento! As fotos ficaram perfeitas!! Ele é de um profissionalismo sem igual, tão paciente, e tem um olhar certeiro, que capta a emoção do momento. Não posso deixar de dizer que amo a forma com que ele edita as fotos.",
    author: "Luiza & Denzel",
  },
  {
    image: img2,
    text: "Quando vimos o perfil do Júnior, falamos “é esse!”, e no primeiro contato a gente teve mais certeza ainda, fizemos o pré wedding e amamos muuuito, a prestatividade, a paciência, a atenção em cada detalhe me ganhou! E não parou por aí, no dia do nosso casamento foi tudo perfeito, mais uma vez nos surpreendeu com sua atenção, e após, quando recebemos nossas fotos, sentimos um carinho tão grande com aquela caixinha, somos eternamente gratos e indicamos de olhos fechados. Ótimo profissional, sem dúvidas!",
    author: "Maygls & Tony",
  },
  {
    image: img3,
    text: "Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia. O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.",
    author: "Fabiany & Aleks",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      id="depoimentos"
      style={{ backgroundColor: 'var(--color-primary-900)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--color-primary-50)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Depoimentos
          </h2>
          <p
            className="text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--color-primary-200)',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            Histórias de casais que confiaram em nosso trabalho
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
            >
              {/* Left: Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="w-full h-full object-cover"
                />

                {/* Subtle Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(23, 23, 23, 0.3), transparent 50%)' }}
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                {/* Decorative Quote SVG */}
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8"
                  style={{ color: 'var(--color-accent-500)', opacity: 0.4 }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Testimonial Text */}
                <p
                  className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 'var(--font-weight-light)',
                    color: 'var(--color-primary-100)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {currentTestimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <p
                    className="text-lg md:text-xl mb-1"
                    style={{
                      fontFamily: 'var(--font-accent)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-primary-50)',
                    }}
                  >
                    {currentTestimonial.author}
                  </p>
                  <p
                    className="text-sm md:text-base"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 'var(--font-weight-light)',
                      color: 'var(--color-primary-400)',
                      letterSpacing: 'var(--tracking-wide)',
                    }}
                  >
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-12 md:mt-16">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="group p-3 md:p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              style={{
                border: '1px solid rgba(253, 252, 251, 0.2)',
              }}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft
                className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1"
                style={{ color: 'var(--color-primary-200)' }}
              />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  style={{
                    width: currentIndex === index ? '32px' : '8px',
                    height: '8px',
                    backgroundColor: currentIndex === index
                      ? 'var(--color-accent-500)'
                      : 'rgba(253, 252, 251, 0.2)',
                    borderRadius: '4px',
                  }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={currentIndex === index ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="group p-3 md:p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              style={{
                border: '1px solid rgba(253, 252, 251, 0.2)',
              }}
              aria-label="Próximo depoimento"
            >
              <ChevronRight
                className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1"
                style={{ color: 'var(--color-primary-200)' }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
