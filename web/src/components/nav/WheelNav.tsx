import { motion, useTransform } from 'motion/react';
import { useState } from 'react';

import { sections } from '../../data/sections';
import { useSectionProgress } from '../../hooks/useSectionProgress';
import { scrollToSection } from '../../lib/scroll';
import WheelLabel from './WheelLabel';
import WheelSegment from './WheelSegment';

const SIZE = 140;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 64;
const INNER_RADIUS = 44;
const LABEL_RADIUS = (OUTER_RADIUS + INNER_RADIUS) / 2;
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
    const scale = useTransform(progress, [0, 0.05], [0.85, 1]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const displayIndex = hoveredIndex ?? activeIndex;
    const displaySection = sections[displayIndex];

    return (
        <motion.div className="no-print fixed right-10 bottom-10 z-40" style={{ opacity, scale }}>
            <div className="pointer-events-none absolute top-1/2 right-[calc(100%+16px)] flex -translate-y-1/2 items-baseline gap-2 font-mono text-xs tracking-[0.18em] whitespace-nowrap uppercase">
                <span className="text-dim">{String(displayIndex + 1).padStart(2, '0')}</span>
                <span className="text-light">{displaySection.label}</span>
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1"
            >
                <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
                    <title>Active section indicator</title>
                    <path d="M0 0 L14 0 L7 10 Z" fill="var(--color-blue-lt)" />
                </svg>
            </div>
            <svg
                width={SIZE}
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
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
                    {sections.map((section, index) => (
                        <WheelLabel
                            key={`label-${section.id}`}
                            index={index}
                            position={polarToCartesian(LABEL_RADIUS, index * SEGMENT_ANGLE)}
                            rotation={rotation}
                            isActive={index === activeIndex}
                        />
                    ))}
                </motion.g>
            </svg>
        </motion.div>
    );
}
