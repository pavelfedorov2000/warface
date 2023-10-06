import { useMemo } from 'react';
import Button from "./Button";
import farmBlue from "../assets/images/farms/farm-blue.png";
import farmOrange from "../assets/images/farms/farm-orange.png";
import farmPink from "../assets/images/farms/farm-pink.png";
import farmBgBlue from "../assets/images/farms/farm-bg-blue.png";
import farmBgOrange from "../assets/images/farms/farm-bg-orange.png";
import farmBgPink from "../assets/images/farms/farm-bg-pink.png";
import { Case } from "../interfaces/Case";
import { Currency } from "../enums/Currency";
import classNames from "classnames";
import Image from './Image';

enum DotColor {
    Blue = '#629DBA',
    Red = '#866648',
    Black = '#000'
}

enum CaseTitle {
    Farm = 'Farm',
    Yello = 'Yello',
    Rose = 'Rose'
}

const mainClass = 'case-card';

const CaseCard = ({ index, price, discount, label, currency }: Case & { index: number; }) => {
    const caseCardBg = useMemo(() => {
        return index === 1 || index % 3 === 1
            ? farmBgBlue
            : index === 2 || index % 3 === 2
                ? farmBgOrange
                : farmBgPink
    }, [index]);

    const caseCardImg = useMemo(() => {
        return index === 1 || index % 3 === 1
            ? farmBlue
            : index === 2 || index % 3 === 2
                ? farmOrange
                : farmPink
    }, [index]);

    const caseCardTitle = useMemo(() => {
        return index % 3 === 2
            ? CaseTitle.Farm
            : index % 3 === 1
                ? CaseTitle.Yello
                : CaseTitle.Rose
    }, [index]);

    return (
        <article className={mainClass} style={{ backgroundImage: `url(${caseCardBg})` }}>
            <Image className={`${mainClass}__img`} src={caseCardImg} width={240} height={186} />
            <div className={`${mainClass}__content`}>
                <div className={classNames(`${mainClass}__badge`, {
                    [`${mainClass}__badge--green`]: currency === Currency.Bet
                })}>
                    {discount && <span className={`${mainClass}__badge-discount`}>{discount}%</span>}
                    <span className={`${mainClass}__badge-vslue`}>{price}{currency ?? Currency.Rouble}</span>
                    {label && <span className={`${mainClass}__badge-label`}>{price}{Currency.Bet}</span>}
                    <span className={`${mainClass}__badge-dot`} style={{ background: `${discount ? DotColor.Red : currency === Currency.Bet ? DotColor.Blue : DotColor.Black}` }}></span>
                </div>
                <div className={`${mainClass}__suptitle`}>Рулетка</div>
                <div className={`${mainClass}__title`}>{caseCardTitle}</div>
                <Button className={`${mainClass}__btn`} text="Крутить рулетку" />
            </div>
        </article>
    );
};

export default CaseCard;