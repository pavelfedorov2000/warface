import classNames from "classnames";

interface Props {
    className?: string;
    price: string;
}

const PriceBox = ({ className, price }: Props) => {
    return (
        <div className={classNames('price-box', className)}>
            Цена
            <span className="price-box__value">{price}₽</span>
        </div>
    );
};

export default PriceBox;