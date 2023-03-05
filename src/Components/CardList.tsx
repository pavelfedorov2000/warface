import classNames from "classnames";
import { CardListItem } from "../interfaces/Card";

interface Props {
    className?: string;
    items: CardListItem[];
}

const CardList = ({ className, items }: Props) => {
    return (
        <dl className={classNames('card-list', className)}>
            {items.map((item, index) => (
                <div key={index}>
                    <dt>{item.property}</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default CardList;