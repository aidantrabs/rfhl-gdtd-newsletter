import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
    });

    return (
        <motion.div
            aria-hidden="true"
            className="no-print fixed top-0 left-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-blue to-blue-lt"
            style={{ scaleX: smoothProgress }}
        />
    );
}
