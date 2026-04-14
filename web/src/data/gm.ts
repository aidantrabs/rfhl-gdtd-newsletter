import type { Manager } from '../types';
import { gm } from './team';

type GMLetter = {
    label: string;
    paragraphs: string[];
    person: Manager;
};

export const gmLetter: GMLetter = {
    label: 'A note from our GM',
    paragraphs: [
        'This first issue of the GDTD newsletter is a window into the team building the digital platforms Republic runs on. It is a chance to put faces, names, and real work in front of the rest of the organisation.',
        'Every month, we will share what is shipping, who is behind it, and how our work connects to the wider business. The goal is simple: give the whole company a clearer picture of how technology is being delivered and where it is heading.',
        'I am proud of what this team has built so far, and just as excited about what is coming next. Thanks for reading, and welcome to issue one.',
    ],
    person: gm,
};
