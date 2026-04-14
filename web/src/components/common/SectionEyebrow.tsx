import { motion } from 'motion/react';

import { cn } from '../../lib/cn';
import { ease } from '../../lib/motion';

type SectionEyebrowProps = {
    label: string;
    className?: string;
};

export default function SectionEyebrow({ label, className }: SectionEyebrowProps) {
    return (
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15% 0px' }}
            className={cn(
                'relative mb-9 inline-block pb-3 text-sm tracking-[0.2em] text-dim',
                className,
            )}
            variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                },
            }}
        >
            {label}
            <motion.span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-line"
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.9, delay: 0.25, ease },
                    },
                }}
            />
        </motion.p>
    );
}
