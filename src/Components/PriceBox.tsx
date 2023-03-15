import classNames from "classnames";
import ActionButton from "./ActionButton";
import Ellipsis from "./icons/Ellipsis";

interface Props {
    className?: string;
    price: string;
}

const PriceBox = ({ className, price }: Props) => {
    return (
        <div className={classNames('price-box', className)}>
            <span>Цена</span>
            <span className="price-box__value">{price}₽</span>
            <ActionButton className="price-box__btn" bg="green" icon={<Ellipsis />} />
        </div>
    );
};

export default PriceBox;