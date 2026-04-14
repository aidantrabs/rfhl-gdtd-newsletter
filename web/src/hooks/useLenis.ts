import Lenis from 'lenis';
import { useEffect } from 'react';

let lenisInstance: Lenis | null = null;

export function scrollToSection(id: string, immediate = false): void {
    if (!lenisInstance) {
        return;
    }

    const target = document.getElementById(id);

    if (!target) {
        return;
    }

    lenisInstance.scrollTo(target, {
        immediate,
        duration: 1.4,
    });
}

export function useLenis(): void {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - (1 - t) ** 4,
            smoothWheel: true,
        });

        lenisInstance = lenis;

        let rafId = 0;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);

            if (target instanceof HTMLElement) {
                lenis.scrollTo(target, { immediate: true });
            }
        }

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
}
