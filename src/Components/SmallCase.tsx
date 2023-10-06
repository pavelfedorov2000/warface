import classNames from "classnames";
import farm from "../assets/images/farms/farm-blue.png";
import { SmallCase as SmallCaseType } from "../interfaces/SmallCase";
import { WithClassName } from "../types/types";

const mainClass = 'small-case';

const SmallCase = ({ className, title, price }: SmallCaseType & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <img src={farm} alt="farm" className={`${mainClass}__img`} />
            <div className={`${mainClass}__title`}>{title}</div>
            <span className={`${mainClass}__price`}>{price}</span>
        </div>
    );
};

export default SmallCase;