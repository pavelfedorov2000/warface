import { ViewsHistory } from "../interfaces/ViewsHistory";
import { formatDateTime } from "../utils/formatDateTime";
import Button from "./Button";
import BtnArrow from "./icons/BtnArrow";
import viewIcon from "../assets/images/icons/view.svg";
import Image from "./Image";

const mainClass = 'views-history-item';

const ViewsHistoryItem = ({ title, info, date, time, viewer }: ViewsHistory) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__title`}>
                <span>
                    <Image src={viewIcon} alt="eye" width={22} height={14} />
                </span>
                {title}
            </div>
            <div className={`${mainClass}__info`}>
                <span className={`${mainClass}__info-title`}>
                    Краткая информация
                </span>
                <p>{info}</p>
            </div>
            <div className={`${mainClass}__info`}>
                <span className={`${mainClass}__info-title`}>
                    Дата просмотра
                </span>
                <p>
                    <time dateTime={`${formatDateTime(date)}T${time}`}>
                        {date} {time}
                    </time>
                    <a href="#">{viewer}</a>
                </p>
            </div>
            <Button href="#" className={`${mainClass}__btn`} bg="gray-2" text="Перейти" icon={<BtnArrow />} reversed />
        </div>
    );
};

export default ViewsHistoryItem;