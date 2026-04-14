import type { Product } from '../types';

export const products: Product[] = [
    {
        id: 'payments-cards',
        name: 'Payments & Cards',
        description: 'Modern issuer and acquirer processing for the entire group.',
        pillar: 'digital-platforms',
    },
    {
        id: 'digital-onboarding',
        name: 'Digital Onboarding',
        description: 'Group-wide KYC, AML and customer signup flows across territories.',
        pillar: 'digital-platforms',
    },
    {
        id: 'superapp',
        name: 'Republic SuperApp',
        description: 'The next-generation customer-facing digital banking experience.',
        pillar: 'engineering',
    },
    {
        id: 'branch-digitalization',
        name: 'Branch Digitalization',
        description: 'Assisted-channel tooling that powers in-branch staff and customers.',
        pillar: 'digital-platforms',
    },
    {
        id: 'wealth-treasury',
        name: 'Wealth & Treasury',
        description: 'Investment, wealth management and treasury platforms for the group.',
        pillar: 'digital-platforms',
    },
    {
        id: 'compliance',
        name: 'Compliance & Financial Crime',
        description: 'Detection, monitoring and reporting tools for regulatory compliance.',
        pillar: 'ic-banking',
    },
];
