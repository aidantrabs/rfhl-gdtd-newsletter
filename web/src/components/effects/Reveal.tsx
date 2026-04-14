import { type Variants, motion } from 'motion/react';
import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';
import { fadeUp } from '../../lib/motion';

type RevealProps = {
    children: ReactNode;
    variants?: Variants;
    index?: number;
    once?: boolean;
    className?: string;
};

export default function Reveal({
    children,
    variants = fadeUp,
    index = 0,
    once = true,
    className,
}: RevealProps) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-15% 0px' }}
            custom={index}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
