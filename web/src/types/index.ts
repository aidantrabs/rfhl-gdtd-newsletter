export type Accent =
    | 'blue'
    | 'blue-lt'
    | 'teal'
    | 'green'
    | 'orange'
    | 'gold'
    | 'purple'
    | 'purple-lt';

export type Manager = {
    name: string;
    initials: string;
    role: string;
    focus: string;
    since?: string;
};

export type Team = {
    id: string;
    name: string;
    shortName: string;
    accent: Accent;
    seniorManager: Manager;
    manager: Manager;
    reports: Manager[];
};

export type Section = {
    id: string;
    label: string;
    accent: Accent;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    accent: Accent;
};
