import { motion } from 'motion/react';
import { useScrollProgress } from '../../hooks';

/**
 * ScrollProgress Component
 * Displays a progress bar at the top of the page showing scroll position
 * Uses the Editorial Luxury accent gradient
 */
export function ScrollProgress() {
    const scrollProgress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
            style={{
                background: 'var(--gradient-accent)',
                scaleX: scrollProgress / 100,
            }}
            initial={{ scaleX: 0 }}
            aria-hidden="true"
        />
    );
}
