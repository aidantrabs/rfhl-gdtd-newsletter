import { motion, useScroll, useTransform } from 'motion/react';
import { type ReactNode, useRef } from 'react';

type ParallaxProps = {
    children: ReactNode;
    speed?: number;
    className?: string;
};

export default function Parallax({ children, speed = 0.2, className }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
