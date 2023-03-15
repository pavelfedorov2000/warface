import { NOTIFICATIONS } from "../constants/notifications";
import NotificationCard from "./NotificationCard";

const NotificationsList = () => {
    return (
        <ul className="notifications-list">
            {NOTIFICATIONS.map((notification, index) => (
                <li key={index}>
                    <NotificationCard {...notification} />
                </li>
            ))}
        </ul>
    );
};

export default NotificationsList;