import cartIcon from "../assets/images/icons/cart.svg";
import { NotificationNew } from "../interfaces/Notification";

const Notification = ({ title, time, text }: NotificationNew) => {
    return (
        <li className="notification">
            <div className="action-button notification__icon action-button--style_bg-green">
                <img src={cartIcon} alt="иконка корзины" />
            </div>
            <div className="notification__title">{title}</div>
            <span className="notification__time">{time}</span>
            <p className="notification__text">{text}</p>
        </li>
    );
};

export default Notification;