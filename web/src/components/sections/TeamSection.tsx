import { motion } from 'motion/react';

import { gm, pillars } from '../../data/team';
import { cn } from '../../lib/cn';
import type { Accent, Person, TeamUnit } from '../../types';
import SectionEyebrow from '../common/SectionEyebrow';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Parallax from '../effects/Parallax';
import Reveal from '../effects/Reveal';

const accentBarClass: Record<Accent, string> = {
    blue: 'bg-blue',
    'blue-lt': 'bg-blue-lt',
    teal: 'bg-teal',
    green: 'bg-green',
    orange: 'bg-orange',
    gold: 'bg-gold',
    purple: 'bg-purple',
    'purple-lt': 'bg-purple-lt',
};

const accentTextClass: Record<Accent, string> = {
    blue: 'text-blue',
    'blue-lt': 'text-blue-lt',
    teal: 'text-teal',
    green: 'text-green',
    orange: 'text-orange',
    gold: 'text-gold',
    purple: 'text-purple',
    'purple-lt': 'text-purple-lt',
};

const accentRingClass: Record<Accent, string> = {
    blue: 'ring-blue/40',
    'blue-lt': 'ring-blue-lt/40',
    teal: 'ring-teal/40',
    green: 'ring-green/40',
    orange: 'ring-orange/40',
    gold: 'ring-gold/40',
    purple: 'ring-purple/40',
    'purple-lt': 'ring-purple-lt/40',
};

type AvatarSize = 'md' | 'lg' | 'xl';

const avatarSizeClass: Record<AvatarSize, string> = {
    md: 'h-14 w-14 text-sm',
    lg: 'h-20 w-20 text-lg',
    xl: 'h-24 w-24 text-2xl',
};

type AvatarProps = {
    initials: string;
    size: AvatarSize;
    ringClass?: string;
    textClass?: string;
};

function Avatar({ initials, size, ringClass, textClass }: AvatarProps) {
    return (
        <div
            className={cn(
                'flex shrink-0 items-center justify-center rounded-full bg-navy-2 font-light tracking-[0.08em] ring-1',
                avatarSizeClass[size],
                ringClass ?? 'ring-line',
                textClass ?? 'text-light',
            )}
        >
            {initials}
        </div>
    );
}

type UnitCardProps = {
    unit: TeamUnit;
    index: number;
};

function UnitCard({ unit, index }: UnitCardProps) {
    return (
        <Reveal index={index}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-navy p-8 transition-all duration-300 hover:-translate-y-1 hover:border-light/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="mb-7 flex items-center justify-between">
                    <div className={cn('h-1 w-10 rounded-full', accentBarClass[unit.accent])} />
                    <span
                        className={cn(
                            'text-[11px] tracking-[0.22em] uppercase',
                            accentTextClass[unit.accent],
                        )}
                    >
                        {unit.shortName}
                    </span>
                </div>
                <h3 className="mb-7 text-h3 leading-tight font-semibold text-paper">{unit.name}</h3>
                <div className="mb-7 flex items-center gap-4">
                    <Avatar
                        initials={unit.lead.initials}
                        size="md"
                        ringClass={accentRingClass[unit.accent]}
                        textClass={accentTextClass[unit.accent]}
                    />
                    <div className="min-w-0 flex-1">
                        <div className="truncate text-base font-semibold text-paper">
                            {unit.lead.name}
                        </div>
                        <div className="truncate text-sm text-muted">{unit.lead.role}</div>
                    </div>
                </div>
                <p className="mt-auto text-sm leading-relaxed text-light">{unit.description}</p>
            </article>
        </Reveal>
    );
}

type SeniorManagerCardProps = {
    person: Person;
    label: string;
    accent: Accent;
    revealIndex: number;
};

function SeniorManagerCard({ person, label, accent, revealIndex }: SeniorManagerCardProps) {
    return (
        <Reveal index={revealIndex}>
            <div className="mx-auto mb-10 flex w-full max-w-[420px] flex-col items-center rounded-2xl border border-line bg-navy px-10 py-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <div className="relative">
                    <motion.span
                        aria-hidden="true"
                        className={cn(
                            'pointer-events-none absolute inset-0 rounded-full ring-1',
                            accentRingClass[accent],
                        )}
                        animate={{
                            opacity: [0.4, 0, 0.4],
                            scale: [1, 1.18, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                        }}
                    />
                    <Avatar
                        initials={person.initials}
                        size="lg"
                        ringClass={accentRingClass[accent]}
                        textClass={accentTextClass[accent]}
                    />
                </div>
                <div
                    className={cn(
                        'mt-5 mb-2 text-[11px] tracking-[0.24em] uppercase',
                        accentTextClass[accent],
                    )}
                >
                    {label}
                </div>
                <div className="mb-1 text-2xl leading-tight font-semibold text-paper">
                    {person.name}
                </div>
                <div className="text-sm text-muted">{person.role}</div>
            </div>
        </Reveal>
    );
}

export default function TeamSection() {
    return (
        <SectionShell id="team" background="navy-2">
            <Parallax className="pointer-events-none absolute inset-0" range={[0, -90]}>
                <Watermark number="06" position="left" />
            </Parallax>
            <div className="relative z-10 w-full max-w-[1200px]">
                <SectionEyebrow label="06 / THE TEAM" />
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        The people behind the platforms.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-16 max-w-[640px] text-lg leading-relaxed text-muted">
                        One general manager, two senior leaders, and the teams shipping every
                        Republic platform.
                    </p>
                </Reveal>

                <Reveal index={3}>
                    <div className="relative mx-auto mb-12 flex w-full max-w-[460px] flex-col items-center rounded-2xl border border-line bg-navy px-10 pt-10 pb-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                        <div className="relative">
                            <motion.span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-blue-lt/50"
                                animate={{
                                    opacity: [0.45, 0, 0.45],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: 'easeInOut',
                                }}
                            />
                            <Avatar
                                initials={gm.initials}
                                size="xl"
                                ringClass="ring-blue-lt/50"
                                textClass="text-blue-lt"
                            />
                        </div>
                        <div className="mt-5 mb-2 text-[11px] tracking-[0.24em] text-blue-lt uppercase">
                            General Manager
                        </div>
                        <div className="mb-2 text-3xl leading-tight font-semibold text-paper">
                            {gm.name}
                        </div>
                        <div className="text-xs tracking-[0.14em] text-muted uppercase">
                            Group Digital Technology Division
                        </div>
                    </div>
                </Reveal>

                <div className="mx-auto mb-20 h-12 w-px bg-gradient-to-b from-line to-transparent" />

                {pillars.map((pillar, pillarIndex) => (
                    <div key={pillar.id} className="mb-24 last:mb-0">
                        <Reveal index={4 + pillarIndex * 2}>
                            <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
                                <span className="text-sm tracking-[0.24em] text-dim uppercase tabular-nums">
                                    {String(pillarIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm tracking-[0.24em] text-light uppercase">
                                    {pillar.label}
                                </span>
                                <span className="ml-auto text-xs tracking-[0.18em] text-dim uppercase">
                                    {pillar.units.length} teams
                                </span>
                            </div>
                        </Reveal>

                        <SeniorManagerCard
                            person={pillar.seniorManager}
                            label="Senior Manager"
                            accent={pillar.units[0].accent}
                            revealIndex={5 + pillarIndex * 2}
                        />

                        <div
                            className={cn(
                                'grid gap-6',
                                pillar.units.length <= 3 ? 'grid-cols-3' : 'grid-cols-3',
                            )}
                        >
                            {pillar.units.map((unit, unitIndex) => (
                                <UnitCard
                                    key={unit.id}
                                    unit={unit}
                                    index={6 + pillarIndex * 2 + unitIndex}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}
