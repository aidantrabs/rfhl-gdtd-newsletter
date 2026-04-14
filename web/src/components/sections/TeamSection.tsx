import { AnimatePresence } from 'motion/react';
import { useRef } from 'react';

import { team } from '../../data/team';
import { useTeamHover } from '../../hooks/useTeamHover';
import type { Pillar } from '../../types';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';
import PersonCardExpanded from '../team/PersonCardExpanded';
import PillarColumn from '../team/PillarColumn';

const pillarOrder: Pillar[] = [
    'engineering',
    'digital-platforms',
    'architecture',
    'ic-banking',
    'support',
];

export default function TeamSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { activeId, registerCard, getCardRect } = useTeamHover({ containerRef });
    const activePerson = activeId ? team.find((person) => person.id === activeId) : null;
    const activeRect = activeId ? getCardRect(activeId) : null;

    return (
        <SectionShell id="team" background="navy-2">
            <Watermark number="05" position="right" />
            <div className="relative z-10 w-full max-w-[1200px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim">
                        05 / THE TEAM
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em]">
                        51 people. 5 pillars. One division.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-20 max-w-[620px] text-lg leading-relaxed text-muted">
                        Every platform, every integration, every release - shipped by the people
                        below.
                    </p>
                </Reveal>
                <div ref={containerRef} className="space-y-20">
                    {pillarOrder.map((pillar) => {
                        const people = team.filter((person) => person.pillar === pillar);

                        if (people.length === 0) {
                            return null;
                        }

                        return (
                            <PillarColumn
                                key={pillar}
                                pillar={pillar}
                                people={people}
                                getCardRef={registerCard}
                            />
                        );
                    })}
                </div>
            </div>
            <AnimatePresence>
                {activePerson && activeRect && (
                    <div
                        key={activePerson.id}
                        className="pointer-events-none fixed z-50"
                        style={{
                            left: activeRect.left + activeRect.width / 2,
                            top: activeRect.top + activeRect.height / 2,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <PersonCardExpanded person={activePerson} />
                    </div>
                )}
            </AnimatePresence>
        </SectionShell>
    );
}
