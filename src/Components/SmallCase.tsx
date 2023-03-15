import classNames from "classnames";
import farm from "../assets/images/farms/farm-blue.png";
import { SmallCase as SmallCaseType } from "../interfaces/SmallCase";

interface Props extends SmallCaseType {
    className?: string;
}

const SmallCase = ({ className, title, price }: Props) => {
    return (
        <div className={classNames('small-case', className)}>
            <img src={farm} alt="farm" className="small-case__img" />
            <div className="small-case__title">{title}</div>
            <span className="small-case__price">{price}</span>
        </div>
    );
};

export default SmallCase;