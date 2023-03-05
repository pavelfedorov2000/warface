import { SmallCase } from "./SmallCase";

export interface Review {
    name: string;
    date: string;
    time: string;
    text: {
        items: { text: string }[]
    }
}

export interface ReviewItem extends Review {
    value: number,
    good: SmallCase;
    answer?: Review;
}