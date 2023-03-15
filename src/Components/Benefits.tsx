import { BENEFITS } from "../constants/benefits";
import GuaranteeCard from "./GuaranteeCard";
import { PageTop } from "./Layout";

const Benefits = () => {
    return (
        <section className="benefits">
            <PageTop title="Все еще не уверены ?" titleLineColor="green" />
            <ul className="benefits__list">
                {BENEFITS.map((benefit, index) => (
                    <GuaranteeCard key={index} iconBg="green" {...benefit} />
                ))}
            </ul>
        </section>
    );
};

export default Benefits;