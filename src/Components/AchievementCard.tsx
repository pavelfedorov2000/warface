import classNames from "classnames";
import globalGold from "../assets/images/global-gold.png";
import { Achievement } from "../interfaces/Achievement";

const mainClass = 'achievement-card';

const AchievementCard = ({ style, title, text }: Achievement & { style?: string; }) => {
    return (
        <div className={classNames(mainClass, {
            [`${mainClass}--style_row`]: style
        })}>
            <div className={`${mainClass}__img`}>
                <img src={globalGold} alt="global-gold" />
            </div>
            <div className={`${mainClass}__content`}>
                <div className={`${mainClass}__title`}>
                    {title}
                </div>
                <p className={`${mainClass}__descr`}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default AchievementCard;