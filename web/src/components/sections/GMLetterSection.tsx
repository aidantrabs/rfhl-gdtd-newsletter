import { gmLetter } from '../../data/gm';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Parallax from '../effects/Parallax';
import Reveal from '../effects/Reveal';

export default function GMLetterSection() {
    const { label, paragraphs, person } = gmLetter;

    return (
        <SectionShell id="gm-letter" background="navy">
            <Parallax range={[0, -100]}>
                <Watermark number="04" position="left" />
            </Parallax>
            <div className="relative z-10 grid w-full max-w-[1100px] grid-cols-[1.2fr_0.8fr] gap-16">
                <div>
                    <Reveal index={0}>
                        <p className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim">
                            04 / FROM THE GM
                        </p>
                    </Reveal>
                    <Reveal index={1}>
                        <h2 className="mb-10 max-w-[620px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em]">
                            {label}
                        </h2>
                    </Reveal>
                    <div className="max-w-[560px] space-y-6 text-lg leading-relaxed text-light">
                        {paragraphs.map((paragraph, i) => (
                            <Reveal key={paragraph.slice(0, 24)} index={i + 2}>
                                <p>{paragraph}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <aside className="flex flex-col gap-6 border-l border-line pl-10">
                    <Reveal index={1}>
                        <div className="flex aspect-square w-[220px] items-center justify-center overflow-hidden rounded-lg border border-line bg-navy-2 font-mono text-5xl font-light tracking-widest text-dim">
                            {person.initials}
                        </div>
                    </Reveal>
                    <Reveal index={3}>
                        <div className="font-mono text-xs tracking-[0.18em] text-dim uppercase">
                            <div className="mb-2 h-px w-10 bg-line" />
                            <div className="mb-1 text-light">{person.name}</div>
                            <div>{person.role}</div>
                        </div>
                    </Reveal>
                </aside>
            </div>
        </SectionShell>
    );
}
