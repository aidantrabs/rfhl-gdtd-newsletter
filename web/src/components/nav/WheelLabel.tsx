import { type MotionValue, motion, useTransform } from 'motion/react';

type WheelLabelProps = {
    index: number;
    position: { x: number; y: number };
    rotation: MotionValue<number>;
    isActive: boolean;
};

export default function WheelLabel({ index, position, rotation, isActive }: WheelLabelProps) {
    const counterRotation = useTransform(rotation, (r) => -r);

    return (
        <motion.g
            style={{
                rotate: counterRotation,
                transformOrigin: `${position.x}px ${position.y}px`,
            }}
        >
            <text
                x={position.x}
                y={position.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`pointer-events-none font-mono text-[8px] tracking-[0.08em] ${isActive ? 'fill-blue-lt' : 'fill-dim'}`}
            >
                {String(index + 1).padStart(2, '0')}
            </text>
        </motion.g>
    );
}
