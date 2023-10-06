import { BENEFITS } from "../constants/benefits";
import { Color } from "../enums/Color";
import GuaranteeCard from "./GuaranteeCard";
import { PageTop } from "./Layout";

const mainClass = 'benefits';

const Benefits = () => {
    return (
        <section className={mainClass}>
            <PageTop title="Все еще не уверены ?" titleLineColor={Color.Green} />
            <ul className={`${mainClass}__list`}>
                {BENEFITS.map((benefit, index) => (
                    <GuaranteeCard key={index} iconBg={Color.Green} {...benefit} />
                ))}
            </ul>
        </section>
    );
};

export default Benefits;