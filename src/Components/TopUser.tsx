import santchezz from "../assets/images/santchezz.png";
import { TopUser as TopUserType } from "../interfaces/TopUser";
import starIcon from "../assets/images/icons/actions-star.svg";
import eclipse from "../assets/images/icons/eclipse.svg";

interface Props extends TopUserType {
    index: number;
    medal: string;
}

const TopUser = ({ index, medal, place, userName, goods, revenue }: Props) => {
    return (
        <article className="top-user">
            <div className="top-user__avatar">
                <img src={santchezz} alt="avatar" />
                <span className={`top-user__place top-user__place--${medal}`}>
                    {place} Место
                    <span style={{ backgroundImage: `url(${starIcon})` }}></span>
                </span>
            </div>
            <div className="top-user__name">{userName}</div>
            <dl className="top-user__stats">
                <div className="top-user__stats-item">
                    <dt>Купленные товары</dt>
                    <dd>{goods}</dd>
                </div>
                <div className="top-user__stats-item">
                    <dt>Заработанно</dt>
                    <dd>{revenue}</dd>
                </div>
            </dl>
            {index <= 2 && <img src={eclipse} alt="eclipse" className="eclipse" />}
        </article>
    );
};

export default TopUser;