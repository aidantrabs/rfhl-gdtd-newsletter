import { keyUpdates } from '../../data/keyUpdates';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

export default function KeyUpdatesSection() {
    return (
        <SectionShell id="key-updates" background="navy">
            <Watermark number="05" position="right" />
            <div className="relative z-10 w-full max-w-[1200px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 text-sm tracking-[0.2em] text-dim">
                        05 / KEY UPDATES
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        What shipped this month.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-16 max-w-[640px] text-lg leading-relaxed text-muted">
                        A snapshot of the most notable work delivered across GDTD teams in the last
                        thirty days.
                    </p>
                </Reveal>
                <div className="grid grid-cols-2 gap-6">
                    {keyUpdates.map((update, i) => (
                        <Reveal key={update.title} index={i + 3}>
                            <article className="h-full rounded-xl border border-line bg-navy-2/40 p-10 transition-colors duration-300 hover:border-light/20">
                                <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase">
                                    <span className="block h-px w-5 bg-line" />
                                    <span className="tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mb-4 text-h3 leading-tight font-semibold text-paper">
                                    {update.title}
                                </h3>
                                <p className="text-base leading-relaxed text-light">
                                    {update.body}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}
