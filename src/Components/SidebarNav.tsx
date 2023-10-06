import { Link } from "react-router-dom";
import { SidebarNavItem } from "../interfaces/SidebarNav";
import Cart from "./icons/Cart";
import Favorite from "./icons/Favorite";
import Invoice from "./icons/Invoice";
import Thumbnail from "./icons/Thumbnail";
import iconBgDots from "../assets/images/icons/icon-bg-dots.svg";

const SidebarMenuItems: SidebarNavItem[] = [{
    path: '/',
    icon: <Cart />,
    text: 'Продать товар'
}, {
    path: '/',
    icon: <Favorite />,
    text: 'Закладки'
}, {
    path: '/views-history',
    icon: <Thumbnail />,
    text: 'История просмотров'
}, {
    path: '/',
    icon: <Invoice />,
    text: 'Истории покупок и продаж'
}];

const mainClass = 'sidebar-nav';

const SidebarNav = () => {
    return (
        <ul className={mainClass}>
            {SidebarMenuItems.map((item, index) => (
                <li key={index} className={`${mainClass}__item`}>
                    <Link className={`${mainClass}__item-link`} to={item.path} style={{ backgroundImage: `url(${iconBgDots})` }}>
                        <span className={`${mainClass}__item-icon`}>
                            {item.icon}
                        </span>
                        <span className={`${mainClass}__item-text`}>
                            {item.text}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SidebarNav;