import classNames from "classnames";
import ActionButton from "./ActionButton";
import Ellipsis from "./icons/Ellipsis";
import { WithClassName } from "../types/types";
import { Color } from "../enums/Color";

const mainClass = 'price-box';

const PriceBox = ({ className, price }: { price: string; } & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <span>Цена</span>
            <span className={`${mainClass}__value`}>{price}₽</span>
            <ActionButton className={`${mainClass}__btn`} bg={Color.Green} icon={<Ellipsis />} />
        </div>
    );
};

export default PriceBox;