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
            <ul className="cases__list">
                {items.map((item, index) => (
                    <li key={index}>
                        <CaseCard index={index + 1} {...item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Cases;