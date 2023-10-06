import classNames from "classnames";
import { CardListItem } from "../interfaces/Card";
import { WithClassName } from "../types/types";

const CardList = ({ className, items }: { items: CardListItem[]; } & WithClassName) => {
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