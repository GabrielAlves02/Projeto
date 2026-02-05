import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import imgLogo from "../../assets/2426d286e3a3b69b0f41f01ce585d555fef496c5.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#sobre", label: "Sobre" },
  ];

  return (
    <>
      {/* Desktop Header - Editorial Luxury */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        {/* Glassmorphism backdrop */}
        <div className="absolute inset-0 backdrop-blur-md border-b"
          style={{
            backgroundColor: 'rgba(253, 252, 251, 0.8)',
            borderColor: 'rgba(10, 9, 8, 0.1)',
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo with sophisticated typography */}
          <motion.a
            href="#home"
            className="text-2xl tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-primary-900)',
            }}
            whileHover={{ letterSpacing: "0.05em" }}
            transition={{ duration: 0.3 }}
          >
            JB
          </motion.a>

          {/* Navigation with hierarchy */}
          <nav className="flex items-center gap-12" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(28, 27, 26, 0.6)',
                  focusVisibleRingColor: 'var(--color-accent-600)',
                  focusVisibleRingOffsetColor: 'var(--color-primary-50)',
                }}
                whileHover={{
                  color: 'var(--color-accent-600)',
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA with accent gradient */}
          <motion.a
            href="#contato"
            className="px-6 py-3 text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
            style={{
              background: 'var(--gradient-accent)',
              color: 'var(--color-primary-900)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 'var(--font-weight-bold)',
              focusVisibleRingColor: 'var(--color-accent-600)',
              focusVisibleRingOffsetColor: 'var(--color-primary-50)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: 'var(--shadow-accent)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Contato
          </motion.a>
        </div>
      </motion.header>

      {/* Mobile Header - Editorial Luxury */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        {/* Glassmorphism backdrop */}
        <div className="absolute inset-0 backdrop-blur-md border-b"
          style={{
            backgroundColor: 'rgba(253, 252, 251, 0.9)',
            borderColor: 'rgba(10, 9, 8, 0.1)',
          }}
        />

        <div className="relative flex items-center justify-between px-4 py-4">
          <motion.a
            href="#home"
            className="text-xl tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-primary-900)',
            }}
          >
            JB
          </motion.a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              color: 'var(--color-primary-900)',
              focusVisibleRingColor: 'var(--color-accent-600)',
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t px-4 py-6 space-y-4"
              style={{
                backgroundColor: 'rgba(253, 252, 251, 0.95)',
                borderColor: 'rgba(10, 9, 8, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-base uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-primary-800)',
                    focusVisibleRingColor: 'var(--color-accent-600)',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-3 text-sm uppercase tracking-wide mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: 'var(--gradient-accent)',
                  color: 'var(--color-primary-900)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 'var(--font-weight-bold)',
                  focusVisibleRingColor: 'var(--color-accent-600)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                Contato
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-6 py-3 z-[9999]"
        style={{
          backgroundColor: 'var(--color-primary-900)',
          color: 'var(--color-primary-50)',
        }}
      >
        Pular para o conteúdo principal
      </a>
    </>
  );
}