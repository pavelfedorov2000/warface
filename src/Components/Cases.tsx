import { Case } from "../interfaces/Case";
import CaseCard from "./CaseCard";
import Title from "./Title";

interface Props {
    title: string;
    items: Case[];
}

const Cases = ({ title, items }: Props) => {
    return (
        <section className="cases">
            <Title className="cases__title" text={title} />
            <ul className="cases__grid">
                {items.map((item, index) => (
                    <CaseCard key={index} index={index + 1} {...item} />
                ))}
            </ul>
        </section>
    );
};

export default Cases;