import { Benefit } from "../interfaces/Benefit";
import weatherboltIcon from "../assets/images/icons/weather-bolt.svg";
import lockIcon from "../assets/images/icons/lock.svg";
import checkIcon from "../assets/images/icons/check.svg";

export const GUARANTEE: Benefit[] = [{
    icon: weatherboltIcon,
    title: 'Моментально',
    text: 'Вы получите свой товар моментально, сразу после успешной оплаты.'
}, {
    icon: lockIcon,
    title: 'Безопасно',
    text: 'Полученные нами данные о вас остаются конфиденциальны.'
}, {
    icon: checkIcon,
    title: 'Качественно',
    text: 'Мы предлагаем качественный и удобный сервис для вас'
}];