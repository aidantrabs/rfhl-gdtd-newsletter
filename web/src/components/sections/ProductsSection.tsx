import { products } from '../../data/products';
import { cn } from '../../lib/cn';
import type { Pillar } from '../../types';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

const pillarDotClass: Record<Pillar, string> = {
    engineering: 'bg-orange',
    'digital-platforms': 'bg-blue-lt',
    architecture: 'bg-purple-lt',
    'ic-banking': 'bg-teal',
    support: 'bg-green',
};

export default function ProductsSection() {
    return (
        <SectionShell id="products" background="surface">
            <Watermark number="06" position="left" />
            <div className="relative z-10 w-full max-w-[1200px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 font-mono text-sm tracking-[0.2em] text-dim">
                        06 / WHAT WE OWN
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em]">
                        The platforms that run Republic.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-16 max-w-[620px] text-lg leading-relaxed text-muted">
                        Six platform groups. Hundreds of services. Millions of customer interactions
                        every day.
                    </p>
                </Reveal>
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <Reveal key={product.id} index={i + 3}>
                            <article className="group h-full rounded-lg border border-line bg-navy-2/40 p-8 transition-colors duration-300 hover:border-blue/40">
                                <div className="mb-5 flex items-center gap-3">
                                    <span
                                        className={cn(
                                            'h-1.5 w-1.5 rounded-full',
                                            pillarDotClass[product.pillar],
                                        )}
                                    />
                                    <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
                                        {product.pillar.replace('-', ' ')}
                                    </span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-light">
                                    {product.name}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted">
                                    {product.description}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}
