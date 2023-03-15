import { Benefit as BenefitType } from "../interfaces/Benefit";

interface Props extends BenefitType {
    iconBg: 'green' | 'purple';
}

const GuaranteeCard = ({ icon, iconBg, title, text }: Props) => {
    return (
        <li className="guarantee-card">
            <span className={`guarantee-card__icon guarantee-card__icon--${iconBg}`}>
                <img src={icon} alt="" />
            </span>
            <div className="guarantee-card__title">{title}</div>
            <p className="guarantee-card__text">{text}</p>
        </li>
    );
};

export default GuaranteeCard;