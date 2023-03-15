import BenefitCard from "./BenefitCard";

const Benefits = [
    'Гарантия безопасной сделки, а также удобная система реферальных бонусов!',
    'Ежедневно бесплатные розыгрыши для наших пользователей!',
    'Полезная информация на форуме и бронирование запросов на товары!'
];

const PromoBenefits = () => {
    return (
        <div className="promo-benefits">
            {Benefits.map((benefit, index) => (
                <BenefitCard key={index} text={benefit} />
            ))}
        </div>
    );
};

export default PromoBenefits;