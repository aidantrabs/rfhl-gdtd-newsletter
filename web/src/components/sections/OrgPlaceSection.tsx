import { motion } from 'motion/react';

import { ease } from '../../lib/motion';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

export default function OrgPlaceSection() {
    return (
        <SectionShell id="rbl-fit" background="surface">
            <Watermark number="03" position="right" />
            <div className="relative z-10 w-full max-w-[1100px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim">
                        03 / OUR PLACE
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-14 max-w-[820px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em]">
                        Where we fit in the RBL IT organisation.
                    </h2>
                </Reveal>
                <div className="relative mx-auto h-[360px] w-full max-w-[780px]">
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        viewBox="0 0 780 360"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M390 82 L130 282"
                            stroke="var(--color-line)"
                            strokeWidth="1"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, margin: '-15% 0px' }}
                            transition={{ duration: 1, delay: 0.3, ease }}
                        />
                        <motion.path
                            d="M390 82 L390 282"
                            stroke="var(--color-blue)"
                            strokeWidth="1.5"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, margin: '-15% 0px' }}
                            transition={{ duration: 1, delay: 0.45, ease }}
                        />
                        <motion.path
                            d="M390 82 L650 282"
                            stroke="var(--color-line)"
                            strokeWidth="1"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, margin: '-15% 0px' }}
                            transition={{ duration: 1, delay: 0.6, ease }}
                        />
                    </svg>
                    <div className="absolute top-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-lg border border-line bg-navy-2 px-10 py-5">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
                            Office of the
                        </span>
                        <span className="text-2xl font-semibold text-light">CIDTO</span>
                    </div>
                    <div className="absolute bottom-0 left-[16.6%] flex -translate-x-1/2 flex-col items-center gap-1 rounded-lg border border-line bg-navy-2 px-8 py-4">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
                            Division
                        </span>
                        <span className="text-xl font-semibold text-light">GTSD</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-lg border border-blue bg-navy px-8 py-4 shadow-[0_0_32px_rgba(0,150,199,0.18)]">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-blue-lt uppercase">
                            That's us
                        </span>
                        <span className="text-xl font-semibold text-blue-lt">GDTD</span>
                    </div>
                    <div className="absolute right-[16.6%] bottom-0 flex translate-x-1/2 flex-col items-center gap-1 rounded-lg border border-line bg-navy-2 px-8 py-4">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
                            Division
                        </span>
                        <span className="text-xl font-semibold text-light">DGMU</span>
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}
