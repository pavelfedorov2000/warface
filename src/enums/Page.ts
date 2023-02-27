import { Home } from "../Pages";

enum Page {
    Home = 'Home',
    Accounts = 'Accounts',
    PinCodes = 'PinCodes',
    TopUsers = 'TopUsers',
    Reviews = 'Reviews',
    Guarantee = 'Guarantee',
    Forum = 'Forum',

    Profile = 'Profile',
    Goods = 'Goods',
    Orders = 'Orders',
    Achievements = 'Achievements',
    Settings = 'Settings',
    Payment = 'Payment',
    ReferalSystem = 'ReferalSystem',
    //NotFound = 'NotFound',
}

export const Pages = {
    main: [{
        [Page.Home]: {
            id: 0,
            path: '/',
            title: 'Главная',
            exact: true,
            component: Home
        }
    }, {
        [Page.Accounts]: {
            id: 1,
            path: '/accounts',
            title: 'Аккаунты'
        }
    }, {
        [Page.PinCodes]: {
            id: 2,
            path: '/pin-codes',
            title: 'Пин-коды'
        }
    }, {
        [Page.TopUsers]: {
            id: 3,
            path: '/top-users',
            title: 'Топ Юзеров'
        }
    }, {
        [Page.Reviews]: {
            id: 4,
            path: '/reviews',
            title: 'Отзывы'
        }
    }, {
        [Page.Guarantee]: {
            id: 5,
            path: '/guarantee',
            title: 'Гарантии'
        }   
    }, {
        [Page.Forum]: {
            id: 6,
            path: '/forum',
            title: 'Форум'
        }
    }],
    profile: [{
        [Page.Profile]: {
            id: 7,
            title: 'Мой профиль',
            path: '/profile'
        }
    }, {
        [Page.Goods]: {
            id: 8,
           title: 'Мои товары',
            path: '/goods'
       }
    }, {
        [Page.Orders]: {
            id: 9,
            title: 'Стол заказов',
            path: '/goods'
        }
    }, {
        [Page.Achievements]: {
            id: 10,
            title: 'Достижения',
            path: '/achievements'
        }
    }, {
        [Page.Settings]: {
            id: 11,
            title: 'Настройки',
            path: '/achievements'
        }
    }, {
        [Page.Payment]: {
            id: 12,
            title: 'Пополение и вывод',
            path: '/payment'
        }
    }, {
        [Page.ReferalSystem]: {
            id: 13,
            title: 'Реферальная система',
            path: '/referal'
        }
    }]
};