import { CardStatus } from "../enums/CardStatus";
import { GoodType } from "../enums/GoodType";
import { Label } from "../enums/Label";

export interface CardListItem {
    property: string;
    value: string;
}

export interface Good {
    type?: GoodType.Gun | GoodType.Rank;
    label?: Label.New | Label.Vip | Label.Rank;
}

export interface Card extends Good {
    id: string;
    status?: string;
    title: string;
    list: {
        items: CardListItem[]
    },
    user: {
        name: string,
        online?: boolean;
    },
    price: string;
}