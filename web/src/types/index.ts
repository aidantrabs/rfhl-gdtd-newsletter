export type Pillar =
    | 'engineering'
    | 'digital-platforms'
    | 'architecture'
    | 'ic-banking'
    | 'support';

export type Level = 'head' | 'pillar-lead' | 'lead-em' | 'em' | 'ic';

export type Person = {
    id: string;
    name: string;
    initials: string;
    photo: string;
    pillar?: Pillar;
    level: Level;
    role: string;
    quote?: string;
};

export type Accent =
    | 'blue'
    | 'blue-lt'
    | 'teal'
    | 'green'
    | 'orange'
    | 'gold'
    | 'purple'
    | 'purple-lt';

export type Section = {
    id: string;
    label: string;
    accent: Accent;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    pillar: Pillar;
};
