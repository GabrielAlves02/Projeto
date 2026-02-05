import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../../hooks";
import imgHero from "../../assets/ebd208048ea80395ccc59e8589a2f9f48a48b047.png";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background Image with Cinematic Treatment */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: prefersReducedMotion ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: "easeOut" }}
          src={imgHero}
          alt="Junior Brunow Photography - Casamento ao ar livre"
          className="w-full h-full object-cover"
        />

        {/* Asymmetric Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />

        {/* Grain Texture Overlay for Editorial Feel */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Content - Asymmetric Bottom-Left Layout */}
      <div className="relative h-full flex items-end pb-16 md:pb-24 lg:pb-32 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
        <div className="max-w-4xl">
          {/* Main Title with Dramatic Typography */}
          <motion.h1
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-6xl md:text-8xl lg:text-9xl leading-tight mb-4 md:mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--color-primary-50)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Junior Brunow
          </motion.h1>

          {/* Subtitle with Decorative Line */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: 0.6
            }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            {/* Golden Decorative Line */}
            <div
              className="w-12 md:w-16 h-[2px]"
              style={{ background: 'var(--gradient-accent)' }}
            />
            <p
              className="text-xl md:text-2xl lg:text-3xl tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--font-weight-light)',
                color: 'var(--color-primary-100)',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              Fotógrafo de Casamentos
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: 0.8
            }}
            className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--color-primary-100)',
              lineHeight: 'var(--leading-relaxed)',
              opacity: 0.9,
            }}
          >
            Capturando histórias autênticas e eternizando sentimentos através de uma lente sensível e técnica refinada.
          </motion.p>

          {/* CTA with Minimalist Design */}
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: 1
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-4"
            style={{
              border: '1px solid rgba(253, 252, 251, 0.4)',
            }}
            whileHover={{
              backgroundColor: 'rgba(253, 252, 251, 0.1)',
              borderColor: 'rgba(253, 252, 251, 0.6)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="text-sm uppercase tracking-widest"
              style={{
                fontFamily: 'var(--font-accent)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-primary-50)',
                letterSpacing: 'var(--tracking-widest)',
              }}
            >
              Ver Portfólio
            </span>

            {/* Animated Arrow */}
            <motion.svg
              className="w-6 h-6"
              style={{ color: 'var(--color-accent-500)' }}
              animate={{ x: prefersReducedMotion ? 0 : [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1,
          delay: 1.2
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-widest mb-2"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(253, 252, 251, 0.6)',
            letterSpacing: 'var(--tracking-widest)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{
            y: prefersReducedMotion ? 0 : [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[1px] h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(253, 252, 251, 0.6), rgba(253, 252, 251, 0))'
          }}
        />
      </motion.div>
    </section>
  );
}