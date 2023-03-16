import { GoodType } from "../enums/GoodType";
import { OnlineStatus } from "../enums/OnlineStatus";
import { Server } from "../enums/Server";
import { Card } from "../interfaces/Card";

export const ACCOUNTS: Card[] = [{
    id: '1',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Bravo
        }, {
            property: 'Донат:',
            value: '55'
        }, {
            property: 'Ранг:',
            value: '25'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Online
    },
    price: '120'
}, {
    id: '2',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Bravo
        }, {
            property: 'Донат:',
            value: '60'
        }, {
            property: 'Ранг:',
            value: '25'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Online
    },
    price: '1000'
}, {
    id: '3',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Alfa
        }, {
            property: 'Донат:',
            value: '90'
        }, {
            property: 'Ранг:',
            value: '25'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Offline
    },
    price: '5000'
}, {
    id: '4',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Charlie
        }, {
            property: 'Донат:',
            value: '70'
        }, {
            property: 'Ранг:',
            value: '70'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Online
    },
    price: '10000'
}, {
    id: '5',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Alfa
        }, {
            property: 'Донат:',
            value: '1000'
        }, {
            property: 'Ранг:',
            value: '80'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Offline
    },
    price: '12000'
}, {
    id: '6',
    type: GoodType.Rank,
    title: 'Аккаунт Warface',
    list: {
        items: [{
            property: 'Сервер:',
            value: Server.Alfa
        }, {
            property: 'Донат:',
            value: '2000'
        }, {
            property: 'Ранг:',
            value: '40'
        }, {
            property: 'Тип:',
            value: 'Перепродажа'
        }]
    },
    user: {
        name: 'Allice',
        status: OnlineStatus.Online
    },
    price: '15000'
}]; 