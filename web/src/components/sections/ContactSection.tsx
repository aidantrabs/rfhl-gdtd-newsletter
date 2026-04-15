import SectionEyebrow from '../common/SectionEyebrow';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Parallax from '../effects/Parallax';
import Reveal from '../effects/Reveal';

type ContactChannel = {
    label: string;
    handle: string;
};

const channels: ContactChannel[] = [
    { label: 'Email', handle: 'gdtd@rfhl.com' },
    { label: 'Intranet', handle: 'republic.net/gdtd' },
    { label: 'Slack', handle: '#gdtd-announcements' },
];

export default function ContactSection() {
    return (
        <SectionShell id="contact" background="navy">
            <Parallax className="pointer-events-none absolute inset-0" range={[0, -90]}>
                <Watermark number="08" position="right" />
            </Parallax>
            <div className="relative z-10 w-full max-w-[1100px]">
                <SectionEyebrow label="08 / GET IN TOUCH" />
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        Got a question? We want to hear from you.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-16 max-w-[560px] text-lg leading-relaxed text-muted">
                        Whether it's a bug, a platform request, or just a curious question about
                        what we do - here's how to reach us.
                    </p>
                </Reveal>
                <div className="grid grid-cols-3 gap-8">
                    {channels.map((channel, i) => (
                        <Reveal key={channel.label} index={i + 3}>
                            <div className="border-t border-line pt-6">
                                <div className="mb-3 text-xs tracking-[0.2em] text-dim uppercase">
                                    {channel.label}
                                </div>
                                <div className="text-lg text-light">{channel.handle}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}
