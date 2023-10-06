import classNames from "classnames";
import santchezz from "../assets/images/santchezz.png";
import { ReviewItem } from "../interfaces/Review";
import { formatDateTime } from "../utils/formatDateTime";
import Star from "./icons/Star";
import SmallCase from "./SmallCase";
import { fakeArray } from "../utils/fakeArray";
import Image from "./Image";

const mainClass = 'review-card';

const ReviewCard = ({ name, date, time, value, good }: ReviewItem) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__info`}>
                <Image src={santchezz} alt="avatar" className={`${mainClass}__avatar`} width={80} height={80} />
                <div className={`${mainClass}__content`}>
                    <div className={`${mainClass}__name`}>{name}</div>
                    <time className={`${mainClass}__datetime`} dateTime={`${formatDateTime(date)}T${time}`}>
                        {time} {date}
                    </time>
                    {value ?
                        <div className="rating">
                            {fakeArray(5).map((_, index) => (
                                <Star key={index} className={classNames('rating-star', {
                                    'filled': value && index + 1 <= value
                                })} />
                            ))}
                        </div>
                        : null
                    }
                </div>
            </div>
            {good && <SmallCase className={`${mainClass}__case`} {...good} />}
            <div className="eclipse"></div>
        </div>
    );
};

export default ReviewCard;