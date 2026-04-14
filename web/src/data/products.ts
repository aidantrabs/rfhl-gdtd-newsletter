import type { Product } from '../types';

export const products: Product[] = [
    {
        id: 'cards-payments',
        name: 'Cards & Payments',
        description:
            'Own and evolve high-value payment and cards capabilities that drive secure, real-time customer transactions.',
        accent: 'orange',
    },
    {
        id: 'digital-onboarding',
        name: 'Digital Onboarding',
        description:
            'Create fast, compliant digital journeys that reduce friction and increase customer conversion.',
        accent: 'blue-lt',
    },
    {
        id: 'core-integrations',
        name: 'Core Integrations',
        description:
            'Expose and orchestrate core services across channels, systems, and operational teams.',
        accent: 'teal',
    },
    {
        id: 'enterprise-platforms',
        name: 'Enterprise Platforms',
        description:
            'Provide secure cloud and shared services that enable product teams to move quickly with control.',
        accent: 'purple-lt',
    },
    {
        id: 'customer-channels',
        name: 'Customer Channels',
        description:
            'Support experiences across mobile, online, branch-adjacent, and partner-connected touchpoints.',
        accent: 'gold',
    },
    {
        id: 'change-governance',
        name: 'Change Governance',
        description: 'Drive standards, visibility, and execution confidence across the portfolio.',
        accent: 'green',
    },
];
