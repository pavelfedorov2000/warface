import classNames from "classnames";
import globalGold from "../assets/images/global-gold.png";
import { Achievement } from "../interfaces/Achievement";

interface Props extends Achievement {
    style?: string;
}

const AchievementCard = ({ style, title, text }: Props) => {
    return (
        <div className={classNames('achievement-card', style && `achievement-card--style_row`)}>
            <div className="achievement-card__img">
                <img src={globalGold} alt="global-gold" />
            </div>
            <div className="achievement-card__content">
                <div className="achievement-card__title">
                    {title}
                </div>
                <p className="achievement-card__descr">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default AchievementCard;