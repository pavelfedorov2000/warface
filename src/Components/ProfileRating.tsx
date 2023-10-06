import { ProfileRating as ProfileRatingType } from "../interfaces/ProfileRating";
import SimpleStar from "./icons/SimpleStar";

const mainClass = 'profile-rating';

const ProfileRating = ({ overall, total, stars }: ProfileRatingType) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__title`}>Рейтинг продавца</div>
            <div className={`${mainClass}__inner`}>
                <div className={`${mainClass}__overall`}>
                    Всего {overall} отзывов
                </div>
                <div className={`${mainClass}__total`}>
                    <b>{total}</b>
                    из 5
                </div>
                <ol className={`${mainClass}__progress`} reversed>
                    {Object.keys(stars).map((star, index) => (
                        <li key={index} className={`${mainClass}__progress-item`}>
                            <div className={`${mainClass}__stars`}>
                                {Array(index + 1).fill(0).map((_, j) => (
                                    <SimpleStar key={j} />
                                ))}
                            </div>
                            <span className={`${mainClass}__progress-bar`}>
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