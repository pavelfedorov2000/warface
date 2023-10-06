import { Donate } from "../interfaces/Donate";
import gun from "../assets/images/gun.png";
import classNames from "classnames";
import { DonateCategory } from "../enums/Donate";
import Image from "./Image";

enum LineColor {
    Orange = 'orange',
    Green = 'green',
    Purple = 'purple',
    Blue = 'blue',
}

const mainClass = 'donate-card';

const DonateCard = ({ type, title, subtitle }: Donate) => {
    return (
        <div className={classNames(mainClass, {
            [`${mainClass}--line_${LineColor.Orange}`]: type === DonateCategory.Attacker,
            [`${mainClass}--line_${LineColor.Green}`]: type === DonateCategory.Medic,
            [`${mainClass}--line_${LineColor.Purple}`]: type === DonateCategory.Engineer,
            [`${mainClass}--line_${LineColor.Blue}`]: type === DonateCategory.Sniper
        })}>
            <Image className={`${mainClass}__img`} src={gun} alt="gun" width={150} height={53} />
            <div className={`${mainClass}__title`}>{title}</div>
            <div className={`${mainClass}__subtitle`}>{subtitle}</div>
        </div>
    );
};

export default DonateCard;