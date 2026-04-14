import { cn } from '../../lib/cn';
import type { Person, Pillar } from '../../types';
import PersonCard from './PersonCard';

const pillarMeta: Record<Pillar, { label: string; dotClass: string }> = {
    engineering: { label: 'Engineering', dotClass: 'bg-orange' },
    'digital-platforms': { label: 'Digital Platforms', dotClass: 'bg-blue-lt' },
    architecture: { label: 'Architecture', dotClass: 'bg-purple-lt' },
    'ic-banking': { label: 'IC Banking', dotClass: 'bg-teal' },
    support: { label: 'Support', dotClass: 'bg-green' },
};

type PillarColumnProps = {
    pillar: Pillar;
    people: Person[];
};

export default function PillarColumn({ pillar, people }: PillarColumnProps) {
    const meta = pillarMeta[pillar];

    return (
        <div>
            <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
                <span className={cn('h-2 w-2 translate-y-[2px] rounded-full', meta.dotClass)} />
                <h3 className="font-mono text-sm tracking-[0.2em] text-light uppercase">
                    {meta.label}
                </h3>
                <span className="font-mono text-xs text-dim">{people.length} people</span>
            </div>
            <div className="grid grid-cols-6 gap-x-4 gap-y-10">
                {people.map((person) => (
                    <PersonCard key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
}
