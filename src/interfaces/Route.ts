import { ReactNode } from "react";

export interface Page {
    title: string;
    subtitle?: string;
}

export interface Route extends Page {
    id: number;
    name: string;
    path: string;
    exact?: boolean;
    profile?: boolean;
    component?: any;
    icon?: ReactNode;
}