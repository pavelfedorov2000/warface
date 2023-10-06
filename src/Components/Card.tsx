import { ButtonType } from "../enums/ButtonType";
import { Card as CardType } from "../interfaces/Card";
import CardList from "./CardList";
import Good from "./Good";
import Edit from "./icons/Edit";
import Favorite from "./icons/Favorite";
import Remove from "./icons/Remove";
import PriceBox from "./PriceBox";
import SmallUser from "./SmallUser";

const mainClass = 'card';

const Card = ({ status, title, user, price, list }: CardType & { handleRemove?: () => void; }) => {
    return (
        <article className={mainClass}>
            {status && <span className={`${mainClass}__badge`}>{status}</span>}
            <div className={`${mainClass}__actions`}>
                <button className={`${mainClass}__action-btn`} type={ButtonType.Button}>
                    <Edit />
                </button>
                <button className={`${mainClass}__action-btn`} type={ButtonType.Button}>
                    <Remove />
                </button>
            </div>
            <div className={`${mainClass}__content`}>
                <Good className={`${mainClass}__good`} />
                <div className={`${mainClass}__title`}>{title}</div>
                <button className="favorite-btn card__favorite" type={ButtonType.Button}>
                    <Favorite />
                </button>
                <CardList className={`${mainClass}__list`} {...list} />
                <SmallUser className={`${mainClass}__user`} {...user} />
                <PriceBox className={`${mainClass}__price`} price={price} />
            </div>
        </article>
    );
};

export default Card;