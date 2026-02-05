import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
    images: { src: string; alt: string }[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    const currentImage = images[currentIndex];

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, onNext, onPrev]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 transition-all z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}
                aria-label="Fechar visualização"
            >
                <X className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'var(--color-primary-50)' }} />
            </button>

            {/* Image Counter */}
            <div
                className="absolute top-4 left-4 md:top-8 md:left-8 px-4 py-2 text-sm md:text-base"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-primary-50)',
                }}
            >
                {currentIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                className="absolute left-4 md:left-8 p-3 md:p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 group"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}
                aria-label="Imagem anterior"
            >
                <ChevronLeft
                    className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-x-1"
                    style={{ color: 'var(--color-primary-50)' }}
                />
            </button>

            {/* Image Container */}
            <div
                className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={currentImage.src}
                        alt={currentImage.alt}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-full max-h-[90vh] object-contain"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        }}
                    />
                </AnimatePresence>

                {/* Image Caption */}
                {currentImage.alt && (
                    <div
                        className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center"
                        style={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                        }}
                    >
                        <p
                            className="text-sm md:text-base"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-primary-50)',
                            }}
                        >
                            {currentImage.alt}
                        </p>
                    </div>
                )}
            </div>

            {/* Next Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-4 md:right-8 p-3 md:p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 group"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}
                aria-label="Próxima imagem"
            >
                <ChevronRight
                    className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1"
                    style={{ color: 'var(--color-primary-50)' }}
                />
            </button>
        </motion.div>
    );
}
