import { NEW_NOTIFICATIONS } from "../constants/notifications";
import Button from "./Button";
import Notification from "./Notification";

const NotificationsDropdown = () => {
    return (
        <div className="notifications-dropdown dropdown-menu">
            <div className="notifications-dropdown__top">
                <div className="notifications-dropdown__title">
                    Уведомления
                    <span>(+{NEW_NOTIFICATIONS.length})</span>
                </div>
                <span className="notifications-dropdown__total">(43)</span>
            </div>
            <ul className="notifications-dropdown__list">
                {NEW_NOTIFICATIONS.map((notification, index) => (
                    <Notification key={index} {...notification} />
                ))}
            </ul>
            <Button className="notifications-dropdown__link" href="/notifications" text="Показать все" style="link" />
        </div>
    );
};

export default NotificationsDropdown;