import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import { useState } from 'react';

import { sections } from '../data/sections';

const SEGMENT_ANGLE = 360 / sections.length;
const TOTAL_ROTATION = -(sections.length - 1) * SEGMENT_ANGLE;

export function useSectionProgress() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    const rotation = useTransform(smoothProgress, [0, 1], [0, TOTAL_ROTATION]);

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(smoothProgress, 'change', (value) => {
        const index = Math.min(
            sections.length - 1,
            Math.max(0, Math.floor(value * sections.length)),
        );

        setActiveIndex((prev) => (prev !== index ? index : prev));
    });

    return {
        progress: smoothProgress,
        rotation,
        activeIndex,
        segmentAngle: SEGMENT_ANGLE,
        sectionCount: sections.length,
    };
}
