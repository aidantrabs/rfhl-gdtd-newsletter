import { motion } from 'motion/react';

import { fadeUp, staggerChildren } from '../../lib/motion';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';

export default function HeroSection() {
    return (
        <SectionShell id="hero" background="navy">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035]"
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[10%] right-[28%] h-[60vh] w-px rotate-[-15deg] bg-gradient-to-b from-transparent via-blue/[0.12] to-transparent"
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[25%] right-[22%] h-[40vh] w-px rotate-[-15deg] bg-gradient-to-b from-transparent via-blue/[0.06] to-transparent"
            />
            <Watermark number="01" position="right" />
            <motion.div
                className="relative z-10 w-full max-w-[1000px]"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
            >
                <motion.p
                    variants={fadeUp}
                    className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim"
                >
                    ISSUE 01 / APR 2026
                </motion.p>
                <motion.h1
                    variants={fadeUp}
                    className="mb-6 text-h1 leading-[0.92] font-extrabold tracking-[-0.04em]"
                >
                    <span className="mb-3 block text-[0.45em] font-light tracking-[8px] text-muted uppercase">
                        Meet
                    </span>
                    <span className="block">Group Digital</span>
                    <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--color-blue-lt)]">
                        Technology
                    </span>
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    className="mb-12 max-w-[480px] text-lg leading-relaxed text-muted"
                >
                    We design, deliver, and evolve the digital platforms that power Republic across
                    every territory.
                </motion.p>
                <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-4 font-mono text-xs tracking-widest text-dim uppercase"
                >
                    <span className="block h-[2px] w-8 rounded-full bg-line" />
                    Scroll to begin
                </motion.div>
            </motion.div>
        </SectionShell>
    );
}
