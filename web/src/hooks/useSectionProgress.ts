import { useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { sections } from '../data/sections';

const SEGMENT_ANGLE = 360 / sections.length;

export function useSectionProgress() {
    const { scrollY, scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    const targetRotation = useMotionValue(0);
    const rotation = useSpring(targetRotation, {
        stiffness: 120,
        damping: 26,
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const midpointsRef = useRef<number[]>([]);

    useEffect(() => {
        function computeMidpoints() {
            midpointsRef.current = sections.map((section) => {
                const el = document.getElementById(section.id);

                if (!el) {
                    return 0;
                }

                const rect = el.getBoundingClientRect();
                return rect.top + window.scrollY + rect.height / 2;
            });
        }

        computeMidpoints();
        window.addEventListener('resize', computeMidpoints);

        return () => {
            window.removeEventListener('resize', computeMidpoints);
        };
    }, []);

    useMotionValueEvent(scrollY, 'change', (value) => {
        const midpoints = midpointsRef.current;

        if (midpoints.length === 0) {
            return;
        }

        const viewportMid = value + window.innerHeight / 2;

        let index = 0;
        let fraction = 0;

        if (viewportMid <= midpoints[0]) {
            index = 0;
            fraction = 0;
        } else if (viewportMid >= midpoints[midpoints.length - 1]) {
            index = midpoints.length - 1;
            fraction = 0;
        } else {
            for (let i = 0; i < midpoints.length - 1; i += 1) {
                if (viewportMid >= midpoints[i] && viewportMid < midpoints[i + 1]) {
                    index = i;
                    const span = midpoints[i + 1] - midpoints[i];
                    fraction = span > 0 ? (viewportMid - midpoints[i]) / span : 0;
                    break;
                }
            }
        }

        targetRotation.set(-(index + fraction) * SEGMENT_ANGLE);

        const nearest = Math.round(index + fraction);
        const safeNearest = Math.max(0, Math.min(sections.length - 1, nearest));
        setActiveIndex((prev) => (prev === safeNearest ? prev : safeNearest));
    });

    return {
        rotation,
        progress,
        activeIndex,
        segmentAngle: SEGMENT_ANGLE,
        sectionCount: sections.length,
    };
}
