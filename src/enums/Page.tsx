import { Accounts, Home, Profile, Support } from "../Pages";

import User from "../Components/icons/User";
import ShoppingHouse from "../Components/icons/ShoppingHouse";
import Truck from "../Components/icons/Truck";
import Winner from "../Components/icons/Winner";
import Settings from "../Components/icons/Settings";
import Wallet from "../Components/icons/Wallet";
import Workflow from "../Components/icons/Workflow";
import TopUsers from "../Pages/TopUsers";

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

    Support = 'Support'
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
            title: 'Аккаунты',
            component: Accounts,
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
            title: 'Топ Юзеров',
            component: TopUsers
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
            path: '/profile',
            icon: <User />,
            component: Profile
        }
    }, {
        [Page.Goods]: {
            id: 8,
            title: 'Мои товары',
            path: '/goods',
            icon: <ShoppingHouse />
        }
    }, {
        [Page.Orders]: {
            id: 9,
            title: 'Стол заказов',
            path: '/goods',
            icon: <Truck />
        }
    }, {
        [Page.Achievements]: {
            id: 10,
            title: 'Достижения',
            path: '/achievements',
            icon: <Winner />
        }
    }, {
        [Page.Settings]: {
            id: 11,
            title: 'Настройки',
            path: '/settings',
            icon: <Settings />
        }
    }, {
        [Page.Payment]: {
            id: 12,
            title: 'Пополение и вывод',
            path: '/payment',
            icon: <Wallet />
        }
    }, {
        [Page.ReferalSystem]: {
            id: 13,
            title: 'Реферальная система',
            path: '/referal',
            icon: <Workflow />
        }
    }],
    other: [{
        [Page.Support]: {
            id: 14,
            title: 'Техническая поддержка',
            path: '/support',
            component: Support
        }
    }]
};