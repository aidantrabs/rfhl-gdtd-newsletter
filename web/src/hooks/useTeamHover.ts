import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';

type UseTeamHoverOptions = {
    containerRef: RefObject<HTMLElement | null>;
    graceDelay?: number;
};

export function useTeamHover({ containerRef, graceDelay = 60 }: UseTeamHoverOptions) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
    const callbackCache = useRef<Map<string, (el: HTMLElement | null) => void>>(new Map());
    const clearTimerRef = useRef<number | null>(null);

    const registerCard = useCallback((id: string) => {
        const existing = callbackCache.current.get(id);

        if (existing) {
            return existing;
        }

        const callback = (el: HTMLElement | null) => {
            if (el === null) {
                cardRefs.current.delete(id);
                return;
            }
            cardRefs.current.set(id, el);
        };

        callbackCache.current.set(id, callback);
        return callback;
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        function clearActive() {
            setActiveId(null);
            clearTimerRef.current = null;
        }

        function scheduleClear() {
            if (clearTimerRef.current !== null) {
                return;
            }
            clearTimerRef.current = window.setTimeout(clearActive, graceDelay);
        }

        function cancelClear() {
            if (clearTimerRef.current !== null) {
                window.clearTimeout(clearTimerRef.current);
                clearTimerRef.current = null;
            }
        }

        function handleMouseMove(event: MouseEvent) {
            const x = event.clientX;
            const y = event.clientY;

            for (const [id, el] of cardRefs.current) {
                const rect = el.getBoundingClientRect();

                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    cancelClear();
                    setActiveId((current) => (current === id ? current : id));
                    return;
                }
            }

            scheduleClear();
        }

        function handleMouseLeave() {
            scheduleClear();
        }

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            cancelClear();
        };
    }, [containerRef, graceDelay]);

    return { activeId, registerCard };
}
