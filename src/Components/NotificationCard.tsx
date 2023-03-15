import { useState } from "react";
import { Notification } from "../interfaces/Notification";
import { formatDateTime } from "../utils/formatDateTime";
import { NotifyIcon } from "./icons";
import dropArrow from "../assets/images/icons/drop-arrow.svg";

const NotificationCard = ({ title, date, time, text }: Notification) => {
    const [expanded, setExpanded] = useState(false);

    const toggleNotification = () => {
        setExpanded((prevState) => !prevState);
    }

    return (
        <div className="notification-card">
            <button onClick={toggleNotification} className="notification-card__toggle" aria-expanded={expanded}>
                <span className="action-button notification-card__icon action-button--style_bg-green">
                    <NotifyIcon />
                </span>
                <div className="notification-card__title">{title}</div>
                <time className="notification-card__datetime" dateTime={`${formatDateTime(date)}T${time}`}>
                    {date} в {time}
                </time>
                <span className="notification-card__toggle-arrow" style={{ backgroundImage: `url(${dropArrow})` }}></span>
            </button>
            <div className="notification-card__content">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NotificationCard;