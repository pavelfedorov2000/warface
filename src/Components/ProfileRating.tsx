import { ProfileRating as ProfileRatingType } from "../interfaces/ProfileRating";
import SimpleStar from "./icons/SimpleStar";

const ProfileRating = ({ overall, total, stars }: ProfileRatingType) => {
    return (
        <div className="profile-rating">
            <div className="profile-rating__title">Рейтинг продавца</div>
            <div className="profile-rating__inner">
                <div className="profile-rating__overall">
                    Всего {overall} отзывов
                </div>
                <div className="profile-rating__total">
                    <b>{total}</b>
                    из 5
                </div>
                <ol className="profile-rating__progress" reversed>
                    {Object.keys(stars).map((star, index) => (
                        <li key={index} className="profile-rating__progress-item">
                            <div className="profile-rating__stars">
                                {Array(index + 1).fill(0).map((_, j) => (
                                    <SimpleStar key={j} />
                                ))}
                            </div>
                            <span className="profile-rating__progress-bar">
                                <span style={{ width: stars[star] }}></span>
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default ProfileRating;