import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

export default function ComingNextSection() {
    return (
        <SectionShell id="coming-next" background="navy-2">
            <Watermark number="08" position="left" />
            <div className="relative z-10 w-full max-w-[1000px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim">
                        08 / COMING NEXT
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <p className="mb-6 font-mono text-xs tracking-[0.2em] text-purple-lt uppercase">
                        Issue 02 / May 2026
                    </p>
                </Reveal>
                <Reveal index={2}>
                    <h2 className="mb-10 max-w-[820px] text-h1 leading-[0.95] font-extrabold tracking-[-0.03em]">
                        <span className="block">A deeper look</span>
                        <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--color-purple-lt)]">
                            at what ships next.
                        </span>
                    </h2>
                </Reveal>
                <Reveal index={3}>
                    <p className="mb-12 max-w-[560px] text-lg leading-relaxed text-muted">
                        Next month: a product retrospective, a first-person field report from the
                        engineering pillar, and a look at where we're taking the Republic SuperApp
                        in the second half of the year.
                    </p>
                </Reveal>
                <Reveal index={4}>
                    <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-dim uppercase">
                        <span className="block h-[2px] w-8 rounded-full bg-line" />
                        See you next month
                    </div>
                </Reveal>
            </div>
        </SectionShell>
    );
}
