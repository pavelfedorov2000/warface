import { BENEFITS } from "../constants/benefits";
import GuaranteeCard from "./GuaranteeCard";
import { PageTop } from "./Layout";

const mainClass = 'benefits';

const Benefits = () => {
    return (
        <section className={mainClass}>
            <PageTop title="Все еще не уверены ?" titleLineColor="green" />
            <ul className={`${mainClass}__list`}>
                {BENEFITS.map((benefit, index) => (
                    <GuaranteeCard key={index} iconBg="green" {...benefit} />
                ))}
            </ul>
        </section>
    );
};

export default Benefits;