import { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { GallerySection } from "./components/GallerySection";
import { ParallaxDivider } from "./components/ParallaxDivider";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import imgParallax from "../assets/ebd208048ea80395ccc59e8589a2f9f48a48b047.png";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-primary-50)' }}>
      {/* Micro-interactions */}
      <ScrollProgress />

      <Header />
      <main id="main-content">
        <HeroSection />
        <GallerySection />
        <ParallaxDivider
          image={imgParallax}
          text="Cada momento é único, cada história é especial"
        />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}