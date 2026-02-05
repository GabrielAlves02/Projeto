import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useIntersectionObserver, usePrefersReducedMotion } from "../../hooks";
import { Lightbox } from "./Lightbox";

// Import images
import img1 from "../../assets/83e0f31466fca723701f67576942d2d9290d8996.png";
import img2 from "../../assets/bab7717ad42eff676c47250b2942db346ab1fb89.png";
import img3 from "../../assets/803333809a78a9815831bd98af467a71013c7210.png";
import img4 from "../../assets/d7e4451c3fd5e9193ba4b51033ef4159a4e72c4e.png";
import img5 from "../../assets/cf14d0de65c562d2d4c8bc5cd91b8250b915acab.png";
import img6 from "../../assets/503612878_18390929053190143_8442548104509494063_n.jpg";
import img7 from "../../assets/518601598_18393541162190143_7596761497616806287_n.jpg";
import img8 from "../../assets/519502349_18393541228190143_6319262612690617211_n.jpg";
import img9 from "../../assets/519567741_18393541219190143_6313105267234465915_n.jpg";
import img10 from "../../assets/568656005_18407119519190143_6778929234652588350_n.jpg";
import img11 from "../../assets/568770890_18407119555190143_8339469802328767244_n.jpg";
import img12 from "../../assets/569829678_18407119546190143_3929841817488112959_n.jpg";
import img13 from "../../assets/610680701_18418089949190143_3055943093493467918_n.jpg";
import img14 from "../../assets/610709221_18418090006190143_6016634003496165385_n.jpg";
import img15 from "../../assets/612066442_18418089919190143_5573024151039062839_n.jpg";

// Bento grid with varied aspect ratios for visual interest
const galleryImages = [
  { src: img1, alt: "Cerimônia ao ar livre", span: "tall" }, // 2 rows
  { src: img2, alt: "Momento íntimo", span: "wide" }, // 2 columns
  { src: img3, alt: "Detalhes florais", span: "normal" },
  { src: img4, alt: "Retrato dos noivos", span: "tall" }, // 2 rows
  { src: img5, alt: "Celebração", span: "normal" },
  { src: img6, alt: "Casamento ao pôr do sol", span: "wide" }, // 2 columns
  { src: img7, alt: "Troca de alianças", span: "normal" },
  { src: img8, alt: "Beijo dos noivos", span: "tall" }, // 2 rows
  { src: img9, alt: "Decoração floral", span: "normal" },
  { src: img10, alt: "Festa de casamento", span: "wide" }, // 2 columns
  { src: img11, alt: "Dança dos noivos", span: "normal" },
  { src: img12, alt: "Convidados celebrando", span: "tall" }, // 2 rows
  { src: img13, alt: "Mesa decorada", span: "normal" },
  { src: img14, alt: "Buquê da noiva", span: "normal" },
  { src: img15, alt: "Brinde dos noivos", span: "wide" }, // 2 columns
];

export function GallerySection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      id="portfolio"
      style={{ backgroundColor: 'var(--color-primary-50)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Editorial-Style Title - 2 Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24"
        >
          {/* Left: Large Title */}
          <div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-light)',
                color: 'var(--color-primary-900)',
                lineHeight: 'var(--leading-tight)',
              }}
            >
              Portfólio
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-end">
            <p
              className="text-base md:text-lg lg:text-xl max-w-lg"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--font-weight-light)',
                color: 'var(--color-primary-700)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              Uma seleção cuidadosa de momentos capturados com sensibilidade e atenção aos detalhes que tornam cada história única.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-4 md:gap-6">
          {galleryImages.map((image, index) => {
            // Define grid span based on image type
            const gridClass =
              image.span === "tall"
                ? "row-span-2"
                : image.span === "wide"
                  ? "col-span-2"
                  : "col-span-1 row-span-1";

            return (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                gridClass={gridClass}
                prefersReducedMotion={prefersReducedMotion}
                onClick={() => openLightbox(index)}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Separate component for each gallery item
function GalleryItem({
  image,
  index,
  gridClass,
  prefersReducedMotion,
  onClick
}: {
  image: { src: string; alt: string; span: string };
  index: number;
  gridClass: string;
  prefersReducedMotion: boolean;
  onClick: () => void;
}) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.05
      }}
      className={`relative overflow-hidden group cursor-pointer ${gridClass}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Minimal Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />

        {/* Subtle Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <p
            className="text-sm md:text-base"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-primary-50)',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            {image.alt}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
