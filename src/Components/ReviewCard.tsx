import classNames from "classnames";
import santchezz from "../assets/images/santchezz.png";
import { ReviewItem } from "../interfaces/Review";
import { formatDateTime } from "../utils/formatDateTime";
import Star from "./icons/Star";
import SmallCase from "./SmallCase";

const ReviewCard = ({ name, date, time, value, good }: ReviewItem) => {
    return (
        <div className="review-card">
            <div className="review-card__info">
                <img src={santchezz} alt="avatar" className="review-card__avatar" />
                <div className="review-card__content">
                    <div className="review-card__name">{name}</div>
                    <time className="review-card__datetime" dateTime={`${formatDateTime(date)}T${time}`}>
                        {time} {date}
                    </time>
                    {value ?
                        <div className="rating">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} className={classNames('rating-star', {
                                    'filled': value && index + 1 <= value
                                })} />
                            ))}
                        </div>
                        : null
                    }
                </div>
            </div>
            {good && <SmallCase className="review-card__case" {...good} />}
            <div className="eclipse"></div>
        </div>
    );
};

export default ReviewCard;