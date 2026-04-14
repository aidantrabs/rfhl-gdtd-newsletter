import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

export default function AboutSection() {
    return (
        <SectionShell id="about" background="navy-2">
            <Watermark number="02" position="left" />
            <div className="relative z-10 w-full max-w-[1000px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 text-sm tracking-[0.2em] text-dim">
                        02 / ABOUT
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-10 max-w-[820px] text-h2 leading-[1.05] font-semibold tracking-[-0.02em] text-paper">
                        We build the digital core of Republic Financial Holdings.
                    </h2>
                </Reveal>
                <div className="max-w-[620px] space-y-6 text-lg leading-relaxed text-light">
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
            </div>
        </SectionShell>
    );
}
