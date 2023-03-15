import { Cards, Cases } from "../Components";
import { PageTop } from "../Components/Layout";
import Tabs from "../Components/Tabs";
import { CASES } from "../constants/cases";
import { Label } from "../enums/Label";
import { Card } from "../interfaces/Card";
import { Tab } from "../interfaces/Tab";

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

            <PageTop title="Топ аккаунтов" />

            <Cards items={CARDS} />
        </main>
    );
}

export default Home;