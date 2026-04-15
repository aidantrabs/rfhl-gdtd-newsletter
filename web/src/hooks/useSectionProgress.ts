import { useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { sections } from '../data/sections';

const SEGMENT_ANGLE = 360 / sections.length;

type SectionBounds = {
    top: number;
    bottom: number;
};

export function useSectionProgress() {
    const { scrollY, scrollYProgress } = useScroll();

    const progress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    const targetRotation = useMotionValue(0);
    const rotation = useSpring(targetRotation, {
        stiffness: 160,
        damping: 28,
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const boundsRef = useRef<SectionBounds[]>([]);

    useEffect(() => {
        const elements = sections
            .map((section) => document.getElementById(section.id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) {
            return;
        }

        function recomputeBounds() {
            boundsRef.current = elements.map((el) => {
                const rect = el.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                return {
                    top,
                    bottom: top + rect.height,
                };
            });
        }

        recomputeBounds();

        const resizeObserver = new ResizeObserver(() => {
            recomputeBounds();
        });

        for (const el of elements) {
            resizeObserver.observe(el);
        }

        window.addEventListener('resize', recomputeBounds);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', recomputeBounds);
        };
    }, []);

    useMotionValueEvent(scrollY, 'change', (value) => {
        const bounds = boundsRef.current;

        if (bounds.length === 0) {
            return;
        }

        const midline = value + window.innerHeight / 2;
        const lastBoundIndex = bounds.length - 1;

        let index = 0;

        if (midline >= bounds[lastBoundIndex].bottom) {
            index = lastBoundIndex;
        } else {
            for (let i = 0; i <= lastBoundIndex; i += 1) {
                if (midline < bounds[i].bottom) {
                    index = i;
                    break;
                }
            }
        }

        targetRotation.set(-index * SEGMENT_ANGLE);
        setActiveIndex((prev) => (prev === index ? prev : index));
    });

    return {
        rotation,
        progress,
        activeIndex,
        segmentAngle: SEGMENT_ANGLE,
        sectionCount: sections.length,
    };
}
