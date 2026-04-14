import { motion } from 'motion/react';

import { cn } from '../../lib/cn';
import { ease } from '../../lib/motion';
import type { Person, Pillar } from '../../types';

const pillarAccentClass: Record<Pillar, string> = {
    engineering: 'bg-orange',
    'digital-platforms': 'bg-blue-lt',
    architecture: 'bg-purple-lt',
    'ic-banking': 'bg-teal',
    support: 'bg-green',
};

type PersonCardExpandedProps = {
    person: Person;
};

export default function PersonCardExpanded({ person }: PersonCardExpandedProps) {
    const accent = person.pillar ? pillarAccentClass[person.pillar] : 'bg-line';

    return (
        <motion.div
            layoutId={`person-${person.id}`}
            className="pointer-events-none relative w-[280px] overflow-hidden rounded-xl border border-blue/30 bg-navy/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur"
            transition={{ layout: { duration: 0.22, ease } }}
        >
            <div className="flex flex-col items-center gap-5 px-7 pt-9 pb-8">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue/40 bg-navy-2 font-mono text-2xl tracking-widest text-blue-lt">
                    {person.initials}
                </div>
                <div className="text-center">
                    <div className="mb-2 text-base font-semibold text-light">{person.name}</div>
                    <div className="font-mono text-[10px] tracking-[0.15em] text-dim uppercase">
                        {person.role}
                    </div>
                </div>
                {person.quote && (
                    <p className="max-w-[220px] text-center text-xs leading-relaxed text-muted italic">
                        "{person.quote}"
                    </p>
                )}
            </div>
            <div className={cn('absolute bottom-0 h-1 w-full', accent)} />
        </motion.div>
    );
}
