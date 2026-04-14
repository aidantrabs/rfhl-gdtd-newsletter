import { useEffect, useState } from 'react';

import { sections } from '../data/sections';

export function useActiveSection(): string {
    const [activeId, setActiveId] = useState<string>(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            },
        );

        for (const section of sections) {
            const element = document.getElementById(section.id);

            if (element) {
                observer.observe(element);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return activeId;
}
