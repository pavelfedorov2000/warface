import { GUARANTEE } from "../constants/guarantee";
import { Color } from "../enums/Color";
import GuaranteeCard from "./GuaranteeCard";

const GuaranteeBlock = () => {
    return (
        <ul className="guarantee-block">
            {GUARANTEE.map((item, index) => (
                <GuaranteeCard key={index} iconBg={Color.Purple} {...item} />
            ))}
        </ul>
    );
};

export default GuaranteeBlock;