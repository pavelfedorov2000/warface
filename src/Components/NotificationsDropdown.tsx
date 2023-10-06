import { NEW_NOTIFICATIONS } from "../constants/notifications";
import { ClassName } from "../enums/ClassName";
import Button from "./Button";
import Notification from "./Notification";

const mainClass = 'notifications-dropdown';

const NotificationsDropdown = () => {
    return (
        <div className={`${mainClass} ${ClassName.DropdownMenu}`}>
            <div className={`${mainClass}__top`}>
                <div className={`${mainClass}__title`}>
                    Уведомления
                    <span>(+{NEW_NOTIFICATIONS.length})</span>
                </div>
                <span className={`${mainClass}__total`}>(43)</span>
            </div>
            <ul className={`${mainClass}__list`}>
                {NEW_NOTIFICATIONS.map((notification, index) => (
                    <Notification key={index} {...notification} />
                ))}
            </ul>
            <Button className={`${mainClass}__link`} href="/notifications" text="Показать все" style="link" />
        </div>
    );
};

export default NotificationsDropdown;