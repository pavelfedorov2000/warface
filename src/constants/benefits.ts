import { Benefit } from "../interfaces/Benefit";
import truckIcon from "../assets/images/icons/truck.svg";
import headphonesIcon from "../assets/images/icons/headphones.svg";
import favoriteIcon from "../assets/images/icons/favorite.svg";
import walletIcon from "../assets/images/icons/wallet.svg";

export const BENEFITS: Benefit[] = [{
    icon: truckIcon,
    title: 'Множество поставщиков',
    text: 'Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт”',
}, {
    icon: headphonesIcon,
    title: 'Техническая поддержка',
    text: 'У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.',
}, {
    icon: favoriteIcon,
    title: 'Безопасная сделка',
    text: 'При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.',
}, {
    icon: walletIcon,
    title: 'Многообразие оплаты',
    text: 'Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.',
}];