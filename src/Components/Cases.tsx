import { Case } from "../interfaces/Case";
import CaseCard from "./CaseCard";

const mainClass = 'cases';

const Cases = ({ items }: { items: Case[]; }) => {
    return (
        <section className={mainClass}>
            <ul className={`${mainClass}__list`}>
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