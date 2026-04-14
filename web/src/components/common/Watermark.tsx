import { cn } from '../../lib/cn';

type WatermarkPosition = 'left' | 'right';

type WatermarkProps = {
    number: string;
    position?: WatermarkPosition;
    className?: string;
};

const positionClasses: Record<WatermarkPosition, string> = {
    left: 'top-10 left-10',
    right: 'right-10 bottom-10',
};

export default function Watermark({ number, position = 'right', className }: WatermarkProps) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                'pointer-events-none absolute select-none',
                'text-[clamp(120px,20vw,240px)] leading-none font-extrabold text-white/[0.015]',
                positionClasses[position],
                className,
            )}
        >
            {number}
        </span>
    );
}
