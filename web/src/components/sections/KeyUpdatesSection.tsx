import { keyUpdates } from '../../data/keyUpdates';
import SectionEyebrow from '../common/SectionEyebrow';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

export default function KeyUpdatesSection() {
    return (
        <SectionShell id="key-updates" background="navy">
            <Watermark number="05" position="right" />
            <div className="relative z-10 w-full max-w-[1200px]">
                <SectionEyebrow label="05 / KEY UPDATES" />
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
                            <article className="group h-full rounded-xl border border-line bg-navy-2/40 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-light/25 hover:bg-navy-2/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
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
