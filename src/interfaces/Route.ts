import { EmptyBlock } from "./EmptyBlock";

export interface Page {
    title?: string;
    subtitle?: string;
    emptyBlock?: EmptyBlock;
}

export interface Route extends Page {
    id: number;
    name: string;
    path: string;
    exact?: boolean;
    profile?: boolean;
    component?: any;
}