import { Cards, Cases } from "../Components";
import Tabs from "../Components/Tabs";
import { CardStatus } from "../enums/CardStatus";
import { Currency } from "../enums/Currency";
import { Label } from "../enums/Label";
import { Card } from "../interfaces/Card";
import { Case } from "../interfaces/Case";
import { Tab } from "../interfaces/Tab";

const CASES: Case[] = [{
    price: 1990,
    currency: Currency.Bet,
}, {
    price: 1990,
    discount: 15,
    label: true
}, {
    price: 1990,
}, {
    price: 1990,
    currency: Currency.Bet,
}, {
    price: 1990,
    discount: 15,
    label: true
}, {
    price: 1990,
}, {
    price: 1990,
    currency: Currency.Bet,
}, {
    price: 1990,
    discount: 15,
    label: true
}, {
    price: 1990,
}];

const CARDS: Card[] = [{
    id: '1',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '2',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '3',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '4',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '5',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '6',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '7',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}, {
    id: '8',
    status: 'new',
    label: Label.Vip,
    title: 'Makmilan Gr-23',
    list: {
        items: [{
            property: 'Тип:',
            value: 'Оружие'
        }, {
            property: 'Кол:',
            value: '33'
        }, {
            property: 'Продажа от:',
            value: '33 шт'
        }, {
            property: 'Срок:',
            value: 'Навсегда'
        }]
    },
    user: {
        name: 'Allice',
        online: true
    },
    price: '120.00'
}];

const TABS: Tab[] = [{
    id: 'top-accounts',
    text: 'Топ Аккаунтов'
}, {
    id: 'top-pincodes',
    text: 'Топ Пин-кодов',
    selected: true
}];

const Home = () => {
    return (
        <main className="page__content">
            <Cases title="Популярные кейсы" items={CASES} />

            <div className="tabs-wrap">
                <Tabs items={TABS} />
            </div>

            <Cards items={CARDS} />
        </main>
    );
}

export default Home;