import { GUARANTEE } from "../constants/guarantee";
import GuaranteeCard from "./GuaranteeCard";

const GuaranteeBlock = () => {
    return (
        <ul className="guarantee-block">
            {GUARANTEE.map((item, index) => (
                <GuaranteeCard key={index} iconBg="purple" {...item} />
            ))}
        </ul>
    );
};

export default GuaranteeBlock;