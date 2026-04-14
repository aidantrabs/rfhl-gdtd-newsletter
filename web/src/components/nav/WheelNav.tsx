import { motion, useTransform } from 'motion/react';
import { useState } from 'react';

import { sections } from '../../data/sections';
import { useSectionProgress } from '../../hooks/useSectionProgress';
import { scrollToSection } from '../../lib/scroll';
import WheelSegment from './WheelSegment';

const SIZE = 180;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 82;
const INNER_RADIUS = 58;
const SEGMENT_ANGLE = 360 / sections.length;
const HALF_SEGMENT = SEGMENT_ANGLE / 2;

type Point = { x: number; y: number };

function polarToCartesian(radius: number, angleDeg: number): Point {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return {
        x: CENTER + radius * Math.cos(angleRad),
        y: CENTER + radius * Math.sin(angleRad),
    };
}

function describeSegmentPath(index: number): string {
    const centerAngle = index * SEGMENT_ANGLE;
    const startAngle = centerAngle - HALF_SEGMENT;
    const endAngle = centerAngle + HALF_SEGMENT;

    const outerStart = polarToCartesian(OUTER_RADIUS, startAngle);
    const outerEnd = polarToCartesian(OUTER_RADIUS, endAngle);
    const innerStart = polarToCartesian(INNER_RADIUS, startAngle);
    const innerEnd = polarToCartesian(INNER_RADIUS, endAngle);

    return [
        `M ${outerStart.x} ${outerStart.y}`,
        `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
        `L ${innerEnd.x} ${innerEnd.y}`,
        `A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${innerStart.x} ${innerStart.y}`,
        'Z',
    ].join(' ');
}

export default function WheelNav() {
    const { rotation, activeIndex, progress } = useSectionProgress();
    const opacity = useTransform(progress, [0, 0.05], [0, 1]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const displayIndex = hoveredIndex ?? activeIndex;
    const displaySection = sections[displayIndex];

    return (
        <div className="no-print fixed right-10 bottom-10 z-[60]">
            <motion.div className="relative" style={{ opacity }}>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
                >
                    <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
                        <title>Active section indicator</title>
                        <path d="M0 0 L16 0 L8 12 Z" fill="var(--color-blue-lt)" />
                    </svg>
                </div>
                <svg
                    width={SIZE}
                    height={SIZE}
                    viewBox={`0 0 ${SIZE} ${SIZE}`}
                    className="drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                    aria-hidden="true"
                >
                    <motion.g
                        style={{
                            rotate: rotation,
                            transformOrigin: `${CENTER}px ${CENTER}px`,
                        }}
                    >
                        {sections.map((section, index) => (
                            <WheelSegment
                                key={section.id}
                                path={describeSegmentPath(index)}
                                accent={section.accent}
                                label={section.label}
                                isActive={index === activeIndex}
                                onClick={() => scrollToSection(section.id)}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            />
                        ))}
                    </motion.g>
                </svg>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] tracking-[0.3em] text-dim">
                        {String(displayIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1.5 max-w-[104px] text-[11px] leading-tight tracking-[0.08em] text-paper uppercase">
                        {displaySection.label}
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
