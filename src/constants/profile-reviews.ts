import { ReviewItem } from "../interfaces/Review";

export const PROFILE_REVIEWS: ReviewItem[] = [{
    name: 'Santchezz',
    date: '27.12.2019',
    time: '01:05',
    value: 4,
    good: {
        title: 'Кейс FARM',
        price: '500₽'
    },
    text: {
        items: [{
            text: 'Потрясный человек!'
        }, {
            text: 'Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги!'
        }]
    },
    answer: {
        name: 'Santchezz',
        date: '12 Фев.',
        time: '22:15',
        text: {
            items: [{
                text: 'Потрясный человек!'
            }, {
                text: 'Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги!'
            }]
        },
    }
}, {
    name: 'Santchezz',
    date: '27.12.2019',
    time: '01:05',
    value: 4,
    good: {
        title: 'Кейс FARM',
        price: '500₽'
    },
}];