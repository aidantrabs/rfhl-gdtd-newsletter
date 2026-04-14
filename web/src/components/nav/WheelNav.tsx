import { motion } from 'motion/react';

import { sections } from '../../data/sections';
import { scrollToSection } from '../../hooks/useLenis';
import { useSectionProgress } from '../../hooks/useSectionProgress';
import WheelSegment from './WheelSegment';

const SIZE = 140;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 64;
const INNER_RADIUS = 44;
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
    const { rotation, activeIndex } = useSectionProgress();

    return (
        <div className="fixed right-10 bottom-10 z-40">
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
                        />
                    ))}
                </motion.g>
            </svg>
        </div>
    );
}
