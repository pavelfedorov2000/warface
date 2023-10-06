import cartIcon from "../assets/images/icons/cart.svg";
import { Notification as NotificationType } from "../interfaces/Notification";
import Image from "./Image";

const mainClass = 'notification';

const Notification = ({ title, time, text }: NotificationType) => {
    return (
        <li className={mainClass}>
            <div className={`action-button ${mainClass}__icon action-button--style_bg-green`}>
                <Image src={cartIcon} alt="иконка корзины" width={16} height={15} />
            </div>
            <div className={`${mainClass}__title`}>{title}</div>
            <span className={`${mainClass}__time`}>{time}</span>
            <p className={`${mainClass}__text`}>{text}</p>
        </li>
    );
};

export default Notification;