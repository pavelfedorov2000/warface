import { Card as CardType } from "../interfaces/Card";
import Card from "./Card";

const Cards = ({ items }: { items: CardType[]; }) => {
    return (
        <div className="cards">
            {items.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Cards;