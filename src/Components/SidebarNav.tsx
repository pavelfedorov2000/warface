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
    path: '/',
    icon: <Thumbnail />,
    text: 'Истории просмотра'
}, {
    path: '/',
    icon: <Invoice />,
    text: 'Истории покупок и продаж'
}]

const SidebarNav = () => {
    return (
        <ul className="sidebar-nav">
            {SidebarMenuItems.map((item, index) => (
                <li key={index} className="sidebar-nav__item">
                    <Link className="sidebar-nav__item-link" to={item.path} style={{ backgroundImage: `url(${iconBgDots})` }}>
                        <span className="sidebar-nav__item-icon">
                            {item.icon}
                        </span>
                        <span className="sidebar-nav__item-text">
                            {item.text}
                        </span>
                    </Link>
                </li>  
            ))}
        </ul>
    );
};

export default SidebarNav;