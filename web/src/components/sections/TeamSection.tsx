import { motion } from 'motion/react';

import { gm, teams } from '../../data/team';
import { cn } from '../../lib/cn';
import type { Accent, Manager } from '../../types';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
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

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

const avatarSizeClass: Record<AvatarSize, string> = {
    sm: 'h-10 w-10 text-[11px]',
    md: 'h-14 w-14 text-sm',
    lg: 'h-16 w-16 text-base',
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

type PersonCardProps = {
    label?: string;
    person: Manager;
    size: AvatarSize;
    ringClass?: string;
    textClass?: string;
};

function PersonCard({ label, person, size, ringClass, textClass }: PersonCardProps) {
    return (
        <div className="group -mx-3 cursor-pointer rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-surface/50">
            <div className="flex items-center gap-4">
                <Avatar
                    initials={person.initials}
                    size={size}
                    ringClass={ringClass}
                    textClass={textClass}
                />
                <div className="min-w-0 flex-1">
                    {label && (
                        <div className="mb-1 text-[10px] tracking-[0.22em] text-dim uppercase">
                            {label}
                        </div>
                    )}
                    <div className="truncate text-base font-semibold text-paper">{person.name}</div>
                    <div className="truncate text-sm text-muted">{person.role}</div>
                </div>
                {person.since && (
                    <div className="shrink-0 text-[10px] tracking-[0.15em] text-dim uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Since {person.since}
                    </div>
                )}
            </div>
            <div className="mt-0 grid grid-rows-[0fr] transition-[grid-template-rows,margin] duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                    <div className="border-l-2 border-line pl-4 text-sm leading-relaxed text-light">
                        {person.focus}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <SectionShell id="team" background="navy-2" fullHeight={false}>
            <Watermark number="06" position="right" />
            <div className="relative z-10 w-full max-w-[1280px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 text-sm tracking-[0.2em] text-dim">
                        06 / THE TEAM
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        The people behind the platforms.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-14 max-w-[640px] text-lg leading-relaxed text-muted">
                        One general manager, three teams, and the people behind every Republic
                        platform.
                    </p>
                </Reveal>

                <Reveal index={3}>
                    <div className="relative mx-auto mb-6 flex w-full max-w-[440px] flex-col items-center rounded-2xl border border-line bg-navy px-10 pt-10 pb-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                        <div className="relative">
                            <motion.span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-blue-lt"
                                animate={{
                                    opacity: [0.35, 0, 0.35],
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

                <div className="mx-auto mb-8 h-10 w-px bg-gradient-to-b from-line to-transparent" />

                <div className="grid grid-cols-3 items-start gap-6">
                    {teams.map((team, i) => (
                        <Reveal key={team.id} index={i + 4}>
                            <article className="flex h-full flex-col rounded-2xl border border-line bg-navy p-8 transition-all duration-300 hover:-translate-y-1 hover:border-light/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                                <div className="mb-8 flex items-center justify-between">
                                    <div
                                        className={cn(
                                            'h-1 w-10 rounded-full',
                                            accentBarClass[team.accent],
                                        )}
                                    />
                                    <span
                                        className={cn(
                                            'text-[11px] tracking-[0.22em] uppercase',
                                            accentTextClass[team.accent],
                                        )}
                                    >
                                        {team.shortName}
                                    </span>
                                </div>

                                <h3 className="mb-10 text-h3 leading-tight font-semibold text-paper">
                                    {team.name}
                                </h3>

                                <div className="mb-8 space-y-2">
                                    <PersonCard
                                        label="Senior Manager"
                                        person={team.seniorManager}
                                        size="md"
                                        ringClass={accentRingClass[team.accent]}
                                        textClass={accentTextClass[team.accent]}
                                    />
                                    <PersonCard label="Manager" person={team.manager} size="md" />
                                </div>

                                <div className="mt-auto border-t border-line pt-6">
                                    <div className="mb-5 flex items-center justify-between">
                                        <span className="text-[10px] tracking-[0.22em] text-dim uppercase">
                                            The Team
                                        </span>
                                        <span
                                            className={cn(
                                                'text-[11px] tracking-[0.18em] uppercase',
                                                accentTextClass[team.accent],
                                            )}
                                        >
                                            {team.reports.length} people
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        {team.reports.map((person) => (
                                            <PersonCard
                                                key={`${team.id}-${person.name}`}
                                                person={person}
                                                size="sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}
