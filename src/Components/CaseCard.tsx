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

enum DotColor {
    Blue = '#629DBA',
    Red = '#866648',
    Black = '#000000'
}

enum CaseTitle {
    Farm = 'Farm',
    Yello = 'Yello',
    Rose = 'Rose'
}

interface Props extends Case {
    index: number;
}

const CaseCard = ({ index, price, discount, label, currency }: Props) => {
    return (
        <article className="case-card" style={{ backgroundImage: `url(${(index === 1 || index % 3 === 1) ? farmBgBlue : (index === 2 || index % 3 === 2) ? farmBgOrange : farmBgPink})` }}>
            <img src={(index === 1 || index % 3 === 1) ? farmBlue : (index === 2 || index % 3 === 2) ? farmOrange : farmPink} alt="img" className="case-card__img" />
            <div className="case-card__content">
                <div className={classNames('case-card__badge', {
                    'case-card__badge--green': currency === Currency.Bet
                })}>
                    {discount && <span className="case-card__badge-discount">{discount}%</span>}
                    <span className="case-card__badge-value">{price}{currency || Currency.Rouble}</span>
                    {label && <span className="case-card__badge-label">{price}{Currency.Bet}</span>}
                    <span className="case-card__badge-dot" style={{ background: `${discount ? DotColor.Red : currency === Currency.Bet ? DotColor.Blue : DotColor.Black}` }}></span>
                </div>
                <div className="case-card__suptitle">Рулетка</div>
                <div className="case-card__title">
                    {index % 3 === 2 ? CaseTitle.Farm : index % 3 === 1 ? CaseTitle.Yello : CaseTitle.Rose}
                </div>
                <Button className="case-card__btn" text="Крутить рулетку" />
            </div>
        </article>
    );
};

export default CaseCard;