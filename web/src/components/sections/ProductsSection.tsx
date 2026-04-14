import { products } from '../../data/products';
import { cn } from '../../lib/cn';
import type { Accent } from '../../types';
import SectionShell from '../common/SectionShell';
import Watermark from '../common/Watermark';
import Reveal from '../effects/Reveal';

const accentDotClass: Record<Accent, string> = {
    blue: 'bg-blue',
    'blue-lt': 'bg-blue-lt',
    teal: 'bg-teal',
    green: 'bg-green',
    orange: 'bg-orange',
    gold: 'bg-gold',
    purple: 'bg-purple',
    'purple-lt': 'bg-purple-lt',
};

export default function ProductsSection() {
    return (
        <SectionShell id="products" background="surface">
            <Watermark number="06" position="left" />
            <div className="relative z-10 w-full max-w-[1200px]">
                <Reveal index={0}>
                    <p className="mb-9 inline-block border-b border-line pb-2 text-sm tracking-[0.2em] text-dim">
                        06 / WHAT WE OWN
                    </p>
                </Reveal>
                <Reveal index={1}>
                    <h2 className="mb-4 max-w-[820px] text-h2 leading-[1.1] font-semibold tracking-[-0.02em] text-paper">
                        The platforms that run Republic.
                    </h2>
                </Reveal>
                <Reveal index={2}>
                    <p className="mb-16 max-w-[620px] text-lg leading-relaxed text-muted">
                        Six product groups, hundreds of services, millions of customer interactions
                        every day.
                    </p>
                </Reveal>
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <Reveal key={product.id} index={i + 3}>
                            <article className="group h-full rounded-xl border border-line bg-navy-2/40 p-8 transition-colors duration-300 hover:border-light/20">
                                <div
                                    className={cn(
                                        'mb-6 h-1.5 w-1.5 rounded-full',
                                        accentDotClass[product.accent],
                                    )}
                                />
                                <h3 className="mb-3 text-h3 font-semibold text-paper">
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
