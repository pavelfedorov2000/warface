import { ViewsHistory } from "../interfaces/ViewsHistory";
import { formatDateTime } from "../utils/formatDateTime";
import Button from "./Button";
import BtnArrow from "./icons/BtnArrow";
import viewIcon from "../assets/images/icons/view.svg";

const ViewsHistoryItem = ({ title, info, date, time, viewer }: ViewsHistory) => {
    return (
        <div className="views-history-item">
            <div className="views-history-item__title">
                <span>
                    <img src={viewIcon} alt="eye" />
                </span>
                {title}
            </div>
            <div className="views-history-item__info">
                <span className="views-history-item__info-title">
                    Краткая информация
                </span>
                <p>{info}</p>
            </div>
            <div className="views-history-item__info">
                <span className="views-history-item__info-title">
                    Дата просмотра
                </span>
                <p>
                    <time dateTime={`${formatDateTime(date)}T${time}`}>
                        {date} {time}
                    </time>
                    <a href="#">{viewer}</a>
                </p>
            </div>
            <Button href="#" className="views-history-item__btn" bg="gray-2" text="Перейти" icon={<BtnArrow />} reversed />
        </div>
    );
};

export default ViewsHistoryItem;