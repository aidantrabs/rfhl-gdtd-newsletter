import { gmLetter } from '../../data/gm';
import SectionEyebrow from '../common/SectionEyebrow';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Parallax from '../effects/Parallax';
import Reveal from '../effects/Reveal';

export default function GMLetterSection() {
    const { label, paragraphs, person } = gmLetter;

    return (
        <SectionShell id="gm-letter" background="navy">
            <Parallax className="pointer-events-none absolute inset-0" range={[0, -80]}>
                <Watermark number="04" position="left" />
            </Parallax>
            <div className="relative z-10 grid w-full max-w-[1200px] grid-cols-[1.25fr_0.75fr] items-center gap-20">
                <div>
                    <SectionEyebrow label="04 / FROM THE GM" />
                    <Reveal index={1}>
                        <h2 className="mb-10 max-w-[620px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em] text-paper">
                            {label}
                        </h2>
                    </Reveal>
                    <div className="max-w-[580px] space-y-6 text-lg leading-relaxed text-light">
                        {paragraphs.map((paragraph, i) => (
                            <Reveal key={paragraph.slice(0, 24)} index={i + 2}>
                                <p>{paragraph}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <aside className="flex flex-col items-center gap-8">
                    <Reveal index={1}>
                        <div className="flex aspect-square w-[260px] items-center justify-center overflow-hidden rounded-xl border border-line bg-navy-2 text-6xl font-light tracking-widest text-dim shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                            {person.initials}
                        </div>
                    </Reveal>
                    <Reveal index={3}>
                        <div className="text-center text-xs tracking-[0.2em] uppercase">
                            <div className="mx-auto mb-3 h-px w-10 bg-line" />
                            <div className="mb-1 text-paper">{person.name}</div>
                            <div className="text-dim">{person.role}</div>
                        </div>
                    </Reveal>
                </aside>
            </div>
        </SectionShell>
    );
}
