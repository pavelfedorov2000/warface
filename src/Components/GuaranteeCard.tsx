import { Color } from "../enums/Color";
import { Benefit as BenefitType } from "../interfaces/Benefit";
import Image from "./Image";

const mainClass = 'guarantee-card';

const GuaranteeCard = ({ icon, iconBg, title, text }: BenefitType & { iconBg: Color; }) => {
    return (
        <li className={mainClass}>
            <span className={`${mainClass}__icon ${mainClass}__icon--${iconBg}`}>
                <Image src={icon} width={22} height={22} />
            </span>
            <div className={`${mainClass}__title`}>{title}</div>
            <p className={`${mainClass}__text`}>{text}</p>
        </li>
    );
};

export default GuaranteeCard;