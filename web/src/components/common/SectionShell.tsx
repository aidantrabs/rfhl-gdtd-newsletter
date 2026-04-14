import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

type SectionBackground = 'navy' | 'navy-2' | 'surface' | 'surface-2';

type SectionShellProps = {
    id: string;
    background?: SectionBackground;
    fullHeight?: boolean;
    className?: string;
    children: ReactNode;
};

const backgroundClasses: Record<SectionBackground, string> = {
    navy: 'bg-navy',
    'navy-2': 'bg-navy-2',
    surface: 'bg-surface',
    'surface-2': 'bg-surface-2',
};

export default function SectionShell({
    id,
    background = 'navy',
    fullHeight = true,
    className,
    children,
}: SectionShellProps) {
    return (
        <section
            id={id}
            className={cn(
                'relative flex flex-col items-center justify-center px-15 py-20',
                fullHeight && 'min-h-dvh',
                backgroundClasses[background],
                className,
            )}
        >
            {children}
        </section>
    );
}
