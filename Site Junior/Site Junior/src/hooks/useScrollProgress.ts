import { useEffect, useState } from 'react';

/**
 * Custom hook to track scroll progress
 * Returns percentage of page scrolled (0-100)
 * 
 * @returns Current scroll progress as percentage
 */
export function useScrollProgress(): number {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        // Initial calculation
        updateProgress();

        // Passive event listener for better performance
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress, { passive: true });

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return scrollProgress;
}
