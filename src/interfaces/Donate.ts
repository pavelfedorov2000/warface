import { DonateCategory } from "../enums/Donate";

export interface Donate {
    id: number;
    type: DonateCategory.Attacker | DonateCategory.Engineer | DonateCategory.Medic | DonateCategory.Sniper;
    title: string;
    subtitle: string;
}