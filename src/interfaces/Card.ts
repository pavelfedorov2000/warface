import { GoodType } from "../enums/GoodType";
import { Label } from "../enums/Label";
import { OnlineStatusType } from "../enums/OnlineStatus";
import { Server } from "../enums/Server";

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
    server?: Server.Alfa | Server.Bravo | Server.Charlie;
    list: {
        items: CardListItem[]
    },
    user: {
        name: string,
        status: OnlineStatusType;
    },
    price: string;
}