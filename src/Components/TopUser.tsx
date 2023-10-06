import santchezz from "../assets/images/santchezz.png";
import { TopUser as TopUserType } from "../interfaces/TopUser";
import starIcon from "../assets/images/icons/actions-star.svg";
import classNames from "classnames";

interface Props extends TopUserType {
    index: number;
    medal: string;
}

const mainClass = 'top-user';

const TopUser = ({ index, medal, place, userName, goods, revenue }: Props) => {
    return (
        <article className={classNames(mainClass, `${mainClass}--${medal}`)}>
            <div className={`${mainClass}__avatar`}>
                <img src={santchezz} alt="avatar" />
                <span className={`${mainClass}__place ${mainClass}__place--${medal}`}>
                    {place} Место
                    <span style={{ backgroundImage: `url(${starIcon})` }}></span>
                </span>
            </div>
            <div className={`${mainClass}__name`}>{userName}</div>
            <dl className={`${mainClass}__stats`}>
                <div className={`${mainClass}__stats-item`}>
                    <dt>Купленные товары</dt>
                    <dd>{goods}</dd>
                </div>
                <div className={`${mainClass}__stats-item`}>
                    <dt>Заработанно</dt>
                    <dd>{revenue}</dd>
                </div>
            </dl>
            {index <= 2 && <span className="eclipse"></span>}
        </article>
    );
};

export default TopUser;