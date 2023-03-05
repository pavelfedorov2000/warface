import farm from "../assets/images/farms/farm-blue.png";
import { SmallCase as SmallCaseType } from "../interfaces/SmallCase";

const SmallCase = ({ title, price }: SmallCaseType) => {
    return (
        <div className="small-case">
            <img src={farm} alt="farm" className="small-case__img" />
            <div className="small-case__title">{title}</div>
            <span className="small-case__price">{price}</span>
        </div>
    );
};

export default SmallCase;