import type { Variants } from 'motion/react';

export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.08,
            ease,
        },
    }),
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease,
        },
    },
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease,
        },
    },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease,
        },
    },
};

export const staggerChildren: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};
