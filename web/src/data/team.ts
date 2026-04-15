import type { Person, Pillar } from '../types';

export const gm: Person = {
    name: 'Marlon Persad',
    initials: 'MP',
    role: 'General Manager, Group Digital Technology Division',
};

export const pillars: Pillar[] = [
    {
        id: 'engineering',
        label: 'Engineering',
        name: 'Group Engineering',
        seniorManager: {
            name: 'Dmytro Lavrinenko',
            initials: 'DL',
            role: 'Senior Manager, Group Engineering',
        },
        units: [
            {
                id: 'digital-banking-support',
                name: 'Digital Banking & Support Systems',
                shortName: 'DB & SS',
                accent: 'purple-lt',
                description:
                    "Responsible for the operational stability, security, and continuous enhancement of the Bank's digital banking platforms and supporting technology. Ensures high availability of Internet and Mobile Banking services while maintaining alignment with enterprise architecture, risk management, and regulatory standards.",
                lead: {
                    name: 'Nigel George',
                    initials: 'NG',
                    role: 'Manager, Digital Banking & Support Systems',
                },
            },
            {
                id: 'engineering-platforms',
                name: 'Engineering Platforms',
                shortName: 'EPL',
                accent: 'orange',
                description:
                    "Ensures the Bank's digital systems work reliably behind the scenes. Maintains the technology foundation that allows online and mobile banking, internal systems, and other digital services to run smoothly, securely, and without interruption - delivering updates safely while protecting customer information.",
                lead: {
                    name: 'Adrian Lee',
                    initials: 'AL',
                    role: 'Manager, Engineering Platforms',
                },
            },
            {
                id: 'engineering-products',
                name: 'Engineering Products',
                shortName: 'EPR',
                accent: 'gold',
                description:
                    "Leads teams that build and improve the Bank's systems, ensuring work is delivered to a high standard and supports the Bank's overall goals. Works closely with other departments, business partners, and senior leadership to deliver results effectively.",
                lead: {
                    name: 'Kiran Ramlakhan',
                    initials: 'KR',
                    role: 'Manager, Engineering Products',
                },
            },
        ],
    },
    {
        id: 'digital-platforms',
        label: 'Digital Platforms',
        name: 'Digital Platforms',
        seniorManager: {
            name: 'David Kell',
            initials: 'DK',
            role: 'Senior Manager, Digital Platforms',
        },
        units: [
            {
                id: 'loan-management',
                name: 'Loan Management Platform',
                shortName: 'LMP',
                accent: 'blue-lt',
                description:
                    'Leading the rollout of a group-wide digital lending platform that enables faster, fully digital loan products across the Republic Group, replacing manual processes and supporting future growth.',
                lead: {
                    name: 'Fahad Siddiqui',
                    initials: 'FS',
                    role: 'Product Owner, Loan Management Platform',
                },
            },
            {
                id: 'products',
                name: 'Products',
                shortName: 'PRD',
                accent: 'teal',
                description:
                    "Sets the long-term vision and roadmap for the Bank's mobile and app platforms, ensuring they support business goals, regulatory needs, and deliver secure, customer-focused solutions across all markets.",
                lead: {
                    name: 'Vasileios Kapralos',
                    initials: 'VK',
                    role: 'Digital Platform Owner, Products',
                },
            },
            {
                id: 'instant-payments',
                name: 'Instant Payment System',
                shortName: 'IPS',
                accent: 'green',
                description:
                    'Leads the Group-wide instant payments work, delivering one shared system that makes sending and receiving money faster, easier, and more reliable for customers.',
                lead: {
                    name: 'Kosti Reshetniak',
                    initials: 'KR',
                    role: 'Digital Platform Owner, Instant Payment System',
                },
            },
            {
                id: 'branch-digitalisation',
                name: 'Branch Digitalisation',
                shortName: 'BRD',
                accent: 'purple',
                description:
                    "Leading the rollout of new digital tools in branches as part of the Bank's digital transformation. Focused on improving the customer journey and making daily work easier for branch staff, while supporting more efficient and modern branch operations.",
                lead: {
                    name: 'Sasha Ramoutar',
                    initials: 'SR',
                    role: 'Digital Platform Owner, Branch Digitalisation',
                },
            },
            {
                id: 'wealth-management',
                name: 'Wealth Management',
                shortName: 'WMG',
                accent: 'gold',
                description:
                    "Drives the strategy and delivery of the Bank's digital wealth capabilities. Leads the rollout of a new Wealth Management core system and enhancements to the customer wealth portal, focused on modern and accessible digital investing.",
                lead: {
                    name: 'Andrew Streinykov',
                    initials: 'AS',
                    role: 'Digital Platform Owner, Wealth Management',
                },
            },
            {
                id: 'digital-onboarding',
                name: 'Digital Onboarding',
                shortName: 'GDO',
                accent: 'blue',
                description:
                    "Leads the delivery of the Bank's Group Digital Onboarding platform, providing a seamless online onboarding experience for new and existing customers across the Group's long-term digital transformation goals.",
                lead: {
                    name: 'Nicholas Seegobin',
                    initials: 'NS',
                    role: 'Digital Platform Owner (Acting), Digital Onboarding',
                },
            },
        ],
    },
];
