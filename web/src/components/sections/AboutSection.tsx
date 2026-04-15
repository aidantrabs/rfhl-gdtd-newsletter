import { stats, territories } from '../../data/stats';
import { cn } from '../../lib/cn';
import type { Accent } from '../../types';
import Marquee from '../common/Marquee';
import SectionEyebrow from '../common/SectionEyebrow';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import NumberCounter from '../effects/NumberCounter';
import Parallax from '../effects/Parallax';
import Reveal from '../effects/Reveal';

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

export default function AboutSection() {
    return (
        <SectionShell id="about" background="navy-2" fullHeight={false}>
            <Parallax className="pointer-events-none absolute inset-0" range={[0, -90]}>
                <Watermark number="02" position="left" />
            </Parallax>
            <div className="relative z-10 w-full max-w-[1280px]">
                <SectionEyebrow label="02 / ABOUT" />
                <Reveal index={1}>
                    <h2 className="mb-10 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        We build the digital core of Republic Financial Holdings.
                    </h2>
                </Reveal>
                <div className="mb-20 max-w-[620px] space-y-6 text-lg leading-relaxed text-light">
                    <Reveal index={2}>
                        <p>
                            Group Digital Technology Division - GDTD - is the team behind the web
                            and mobile platforms every Republic customer touches, from account
                            onboarding to everyday banking to wealth and compliance.
                        </p>
                    </Reveal>
                    <Reveal index={3}>
                        <p>
                            We design, deliver, and evolve these platforms across every RBL
                            territory. Engineering, architecture, product delivery, and
                            round-the-clock support - all under one roof.
                        </p>
                    </Reveal>
                </div>

                <div className="mb-16 grid grid-cols-4 gap-10 border-t border-b border-line py-14">
                    {stats.map((stat, i) => (
                        <Reveal key={stat.label} index={i + 4}>
                            <div className="relative flex flex-col gap-6 pl-8 first:pl-0">
                                {i > 0 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 -left-5 h-full w-px bg-line"
                                    />
                                )}
                                <div className="flex items-center gap-3 text-[11px] text-muted uppercase">
                                    <span className="block h-px w-5 bg-line" />
                                    <span className="tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <div
                                    className={cn(
                                        'text-[clamp(56px,7vw,96px)] leading-[0.85] font-light tracking-[-0.045em] tabular-nums',
                                        accentTextClass[stat.accent],
                                    )}
                                >
                                    <NumberCounter to={stat.to} suffix={stat.suffix} />
                                </div>
                                <div>
                                    <div className="mb-1 text-base font-semibold tracking-tight text-paper">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm leading-snug text-muted">
                                        {stat.caption}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal index={8}>
                    <Marquee items={territories} />
                </Reveal>
            </div>
        </SectionShell>
    );
}
