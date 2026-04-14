import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

type NumberCounterProps = {
    to: number;
    suffix?: string;
    duration?: number;
    className?: string;
};

export default function NumberCounter({
    to,
    suffix = '',
    duration = 1.8,
    className,
}: NumberCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-20% 0px' });
    const count = useMotionValue(0);
    const display = useTransform(count, (value) => `${Math.round(value)}${suffix}`);

    useEffect(() => {
        if (!inView) {
            return;
        }

        const controls = animate(count, to, {
            duration,
            ease: [0.16, 1, 0.3, 1],
        });

        return () => controls.stop();
    }, [inView, count, to, duration]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
}
