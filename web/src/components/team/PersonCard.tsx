import { motion } from 'motion/react';
import { forwardRef } from 'react';

import type { Person } from '../../types';

type PersonCardProps = {
    person: Person;
};

const PersonCard = forwardRef<HTMLDivElement, PersonCardProps>(function PersonCard(
    { person },
    ref,
) {
    return (
        <motion.div
            ref={ref}
            layoutId={`person-${person.id}`}
            className="group flex flex-col items-center text-center"
        >
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-line bg-navy-2 font-mono text-base tracking-widest text-dim transition-colors duration-300 group-hover:border-blue/60 group-hover:text-blue-lt">
                {person.initials}
            </div>
            <div className="mb-1 text-sm font-medium text-light">{person.name}</div>
            <div className="max-w-[160px] font-mono text-[10px] leading-snug tracking-[0.15em] text-dim uppercase">
                {person.role}
            </div>
        </motion.div>
    );
});

export default PersonCard;
