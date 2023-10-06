import star from "../assets/images/star-big.svg";
import innerStar from "../assets/images/star-inner.svg";

const mainClass = 'benefit-card';

const BenefitCard = ({ text }: { text: string; }) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__stars`}>
                <img className={`${mainClass}__star`} src={star} alt="star" width={75} height={72} />
                <img className={`${mainClass}__inner-star`} src={innerStar} alt="star" width={30} height={29} />
            </div>
            <div className={`${mainClass}__content`}>
                <div className={`${mainClass}__title`}>Выгодные предложения</div>
                <p className={`${mainClass}__text`}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;