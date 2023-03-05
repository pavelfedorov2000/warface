import { Currency } from "../enums/Currency";

export interface Case {
    price: number;
    currency?: Currency.Bet | Currency.Rouble;
    discount?: number;
    label?: boolean;
}