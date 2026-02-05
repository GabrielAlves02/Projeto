import { useEffect, useState, useRef, RefObject } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Detects when an element enters the viewport
 * 
 * @param options - IntersectionObserver options
 * @returns object with ref and isIntersecting state
 */
export function useIntersectionObserver<T extends Element = Element>(
    options: IntersectionObserverInit = {}
): { ref: React.RefObject<T>; isIntersecting: boolean } {
    const ref = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: 0.1,
            ...options,
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, isIntersecting };
}

