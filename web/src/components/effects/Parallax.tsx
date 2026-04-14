import { motion, useScroll, useTransform } from 'motion/react';
import { type ReactNode, useRef } from 'react';

type ParallaxProps = {
    children: ReactNode;
    range?: [number, number];
    className?: string;
};

export default function Parallax({ children, range = [-60, 60], className }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], range);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
