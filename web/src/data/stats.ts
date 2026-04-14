import type { Accent } from '../types';

export type Stat = {
    to: number;
    suffix?: string;
    label: string;
    caption: string;
    accent: Accent;
};

export const stats: Stat[] = [
    {
        to: 58,
        suffix: '+',
        label: 'GDTD staff',
        caption: 'Engineers, product, and support',
        accent: 'blue-lt',
    },
    {
        to: 12,
        suffix: '+',
        label: 'Platforms',
        caption: 'Running across the group',
        accent: 'teal',
    },
    {
        to: 8,
        label: 'Territories',
        caption: 'Caribbean and beyond',
        accent: 'green',
    },
    {
        to: 3,
        label: 'Teams',
        caption: 'One shared mission',
        accent: 'gold',
    },
];

export const territories: string[] = [
    'Trinidad & Tobago',
    'Barbados',
    'Grenada',
    'Guyana',
    'Cayman Islands',
    'Saint Lucia',
    'Saint Vincent',
    'Suriname',
];
