import type { KeyboardEvent } from 'react';

import { cn } from '../../lib/cn';
import type { Accent } from '../../types';

const accentFillClass: Record<Accent, string> = {
    blue: 'fill-blue/20',
    'blue-lt': 'fill-blue-lt/20',
    teal: 'fill-teal/20',
    green: 'fill-green/20',
    orange: 'fill-orange/20',
    gold: 'fill-gold/20',
    purple: 'fill-purple/20',
    'purple-lt': 'fill-purple-lt/20',
};

const accentStrokeClass: Record<Accent, string> = {
    blue: 'stroke-blue',
    'blue-lt': 'stroke-blue-lt',
    teal: 'stroke-teal',
    green: 'stroke-green',
    orange: 'stroke-orange',
    gold: 'stroke-gold',
    purple: 'stroke-purple',
    'purple-lt': 'stroke-purple-lt',
};

type WheelSegmentProps = {
    path: string;
    accent: Accent;
    label: string;
    isActive: boolean;
    onClick: () => void;
    onHoverStart: () => void;
    onHoverEnd: () => void;
};

export default function WheelSegment({
    path,
    accent,
    label,
    isActive,
    onClick,
    onHoverStart,
    onHoverEnd,
}: WheelSegmentProps) {
    function handleKeyDown(event: KeyboardEvent<SVGPathElement>) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    }

    return (
        <path
            d={path}
            role="button"
            tabIndex={0}
            aria-label={`Jump to ${label}`}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            onFocus={onHoverStart}
            onBlur={onHoverEnd}
            strokeWidth={isActive ? 1.5 : 1}
            className={cn(
                'cursor-pointer transition-all duration-300 hover:stroke-blue-lt focus:outline-none',
                isActive ? accentFillClass[accent] : 'fill-navy-2',
                isActive ? accentStrokeClass[accent] : 'stroke-line',
            )}
        />
    );
}
