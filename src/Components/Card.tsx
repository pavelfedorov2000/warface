import { Card as CardType } from "../interfaces/Card";
import CardList from "./CardList";
import Good from "./Good";
import Edit from "./icons/Edit";
import Favorite from "./icons/Favorite";
import Remove from "./icons/Remove";
import PriceBox from "./PriceBox";
import SmallUser from "./SmallUser";

interface Props extends CardType {
    handleRemove?: () => void;
}

const Card = ({ label, status, title, user, price, list }: Props) => {
    return (
        <article className="card">
            {status && <span className="card__badge">{status}</span>}
            <div className="card__actions">
                <button className="card__action-btn" type="button">
                    <Edit />
                </button>
                <button className="card__action-btn" type="button">
                    <Remove />
                </button>
            </div>
            <div className="card__content">
                <Good className="card__good" />
                <div className="card__title">{title}</div>
                <button className="favorite-btn card__favorite" type="button">
                    <Favorite />
                </button>
                <CardList className="card__list" {...list} />
                <SmallUser className="card__user" {...user} />
                <PriceBox className="card__price" price={price} />
            </div>
        </article>
    );
};

export default Card;