import { motion } from 'motion/react';

import { cn } from '../../lib/cn';

type MarqueeProps = {
    items: string[];
    duration?: number;
    className?: string;
    separator?: string;
};

export default function Marquee({
    items,
    duration = 38,
    className,
    separator = '·',
}: MarqueeProps) {
    return (
        <div
            className={cn(
                'relative flex w-full overflow-hidden border-y border-line py-6',
                'before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-navy-2 before:to-transparent',
                'after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-navy-2 after:to-transparent',
                className,
            )}
        >
            <motion.div
                className="flex shrink-0 items-center gap-12 pr-12"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                }}
            >
                {items.map((item) => (
                    <MarqueeItem key={item} label={item} separator={separator} />
                ))}
            </motion.div>
            <motion.div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                }}
            >
                {items.map((item) => (
                    <MarqueeItem key={`dup-${item}`} label={item} separator={separator} />
                ))}
            </motion.div>
        </div>
    );
}

type MarqueeItemProps = {
    label: string;
    separator: string;
};

function MarqueeItem({ label, separator }: MarqueeItemProps) {
    return (
        <span className="flex items-center gap-12">
            <span className="text-h3 font-light tracking-[-0.01em] whitespace-nowrap text-light">
                {label}
            </span>
            <span className="text-h3 font-light text-dim">{separator}</span>
        </span>
    );
}
