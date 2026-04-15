export type Accent =
    | 'blue'
    | 'blue-lt'
    | 'teal'
    | 'green'
    | 'orange'
    | 'gold'
    | 'purple'
    | 'purple-lt';

export type Person = {
    name: string;
    initials: string;
    role: string;
};

export type TeamUnit = {
    id: string;
    name: string;
    shortName: string;
    accent: Accent;
    description: string;
    lead: Person;
};

export type Pillar = {
    id: string;
    label: string;
    name: string;
    seniorManager: Person;
    units: TeamUnit[];
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
