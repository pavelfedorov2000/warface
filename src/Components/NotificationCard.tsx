import { useState } from "react";
import { Notification } from "../interfaces/Notification";
import { formatDateTime } from "../utils/formatDateTime";
import { NotifyIcon } from "./icons";
import dropArrow from "../assets/images/icons/drop-arrow.svg";

const mainClass = 'notification-card';

const NotificationCard = ({ title, date, time, text }: Notification) => {
    const [expanded, setExpanded] = useState(false);

    const toggleNotification = () => {
        setExpanded((expanded) => !expanded);
    }

    return (
        <div className={mainClass}>
            <button onClick={toggleNotification} className={`${mainClass}__toggle`} aria-expanded={expanded}>
                <span className={`action-button ${mainClass}__icon action-button--style_bg-green`}>
                    <NotifyIcon />
                </span>
                <div className={`${mainClass}__title`}>{title}</div>
                <time className={`${mainClass}__datetime`} dateTime={`${formatDateTime(date)}T${time}`}>
                    {date} в {time}
                </time>
                <span className={`${mainClass}__toggle-arrow`} style={{ backgroundImage: `url(${dropArrow})` }}></span>
            </button>
            <div className={`${mainClass}__content`}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NotificationCard;