import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * CustomCursor Component
 * Desktop-only custom cursor with mix-blend-difference effect
 * Scales up when hovering over interactive elements
 */
export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        setIsVisible(true);

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updatePosition);

        // Detect hover on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isHovering ? 1.5 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
            aria-hidden="true"
        >
            <div className="w-full h-full border-2 rounded-full"
                style={{ borderColor: 'var(--color-primary-50)' }}
            />
        </motion.div>
    );
}
