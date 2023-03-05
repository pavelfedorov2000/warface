import { Card as CardType } from "../interfaces/Card";
import Card from "./Card";

interface Props {
    items: CardType[]
}

const Cards = ({ items }: Props) => {
    return (
        <div className="cards">
            {items.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Cards;