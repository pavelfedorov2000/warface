import { Donate } from "../interfaces/Donate";
import gun from "../assets/images/gun.png";
import classNames from "classnames";
import { DonateCategory } from "../enums/Donate";

const DonateCard = ({ type, title, subtitle }: Donate) => {
    return (
        <div className={classNames('donate-card', {
            'donate-card--line_orange': type === DonateCategory.Attacker,
            'donate-card--line_green': type === DonateCategory.Medic,
            'donate-card--line_purple': type === DonateCategory.Engineer,
            'donate-card--line_blue': type === DonateCategory.Sniper
        })}>
            <img className="donate-card__img" src={gun} alt="gun" />
            <div className="donate-card__title">{title}</div>
            <div className="donate-card__subtitle">{subtitle}</div>
        </div>
    );
};

export default DonateCard;