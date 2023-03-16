import { Case } from "../interfaces/Case";
import CaseCard from "./CaseCard";

interface Props {
    items: Case[];
}

const Cases = ({ items }: Props) => {
    return (
        <section className="cases">
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