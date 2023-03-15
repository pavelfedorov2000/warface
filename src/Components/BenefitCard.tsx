import star from "../assets/images/star-big.svg";
import innerStar from "../assets/images/star-inner.svg";

interface Props {
    text: string;
}

const BenefitCard = ({ text }: Props) => {
    return (
        <div className="benefit-card">
            <div className="benefit-card__stars">
                <img className="benefit-card__star" src={star} alt="star" width="75" height="72" />
                <img className="benefit-card__inner-star" src={innerStar} alt="star" width="30" height="29" />
            </div>
            <div className="benefit-card__content">
                <div className="benefit-card__title">Выгодные предложения</div>
                <p className="benefit-card__text">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;