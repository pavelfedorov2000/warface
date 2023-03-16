import { Accounts, Achievements, Home, Notifications, Profile, Support, ViewsHistory, Settings, Promo, Reviews, Guarantee, Goods } from "../Pages";

import User from "../Components/icons/User";
import ShoppingHouse from "../Components/icons/ShoppingHouse";
import Truck from "../Components/icons/Truck";
import Winner from "../Components/icons/Winner";
import SettingsIcon from "../Components/icons/Settings";
import Wallet from "../Components/icons/Wallet";
import Workflow from "../Components/icons/Workflow";
import TopUsers from "../Pages/TopUsers";
import { Thumbnail } from "../Components/icons";

enum Page {
    Promo = 'Promo',
    Home = 'Home',
    Accounts = 'Accounts',
    PinCodes = 'PinCodes',
    TopUsers = 'TopUsers',
    Reviews = 'Reviews',
    Guarantee = 'Guarantee',
    Profile = 'Profile',
    Goods = 'Goods',
    Orders = 'Orders',
    Achievements = 'Achievements',
    Settings = 'Settings',
    Payment = 'Payment',
    ReferalSystem = 'ReferalSystem',
    ViewsHistory = 'ViewsHistory',
    Support = 'Support',
    Notifications = 'Notifications'
}

export const Pages = {
    main: [{
        [Page.Promo]: {
            id: 0,
            path: '/',
            exact: true,
            component: Promo,
        }
    }, {
        [Page.Home]: {
            id: 1,
            path: '/home',
            title: 'Главная',
            exact: true,
            component: Home
        }
    }, {
        [Page.Accounts]: {
            id: 2,
            path: '/accounts',
            title: 'Аккаунты',
            component: Accounts,
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
            title: 'Отзывы',
            component: Reviews
        }
    }, {
        [Page.Guarantee]: {
            id: 5,
            path: '/guarantee',
            title: 'Гарантии',
            component: Guarantee
        }
    }],
    profile: [{
        [Page.Profile]: {
            id: 6,
            title: 'Мой профиль',
            path: '/profile',
            icon: <User />,
            component: Profile
        }
    }, {
        [Page.Goods]: {
            id: 7,
            title: 'Мои товары',
            path: '/goods',
            icon: <ShoppingHouse />,
            component: Goods
        }
    }, {
        [Page.Achievements]: {
            id: 8,
            title: 'Достижения',
            path: '/achievements',
            icon: <Winner />,
            component: Achievements
        }
    }, {
        [Page.Settings]: {
            id: 9,
            title: 'Настройки',
            path: '/settings',
            icon: <SettingsIcon />,
            component: Settings
        }
    }, {
        [Page.ReferalSystem]: {
            id: 10,
            title: 'Реферальная система',
            path: '/referal',
            icon: <Workflow />
        }
    }],
    sidebar: [{
        [Page.ViewsHistory]: {
            id: 11,
            title: 'История просмотров',
            path: '/views-history',
            icon: <Thumbnail />,
            component: ViewsHistory
        }
    }],
    other: [{
        [Page.Support]: {
            id: 12,
            title: 'Техническая поддержка',
            path: '/support',
            component: Support
        }
    }, {
        [Page.Notifications]: {
            id: 13,
            title: 'Уведомления',
            path: '/notifications',
            component: Notifications
        }
    }]
};