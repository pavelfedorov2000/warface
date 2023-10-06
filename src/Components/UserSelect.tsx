import classNames from "classnames";
import dropArrow from "../assets/images/icons/drop-arrow.svg";
import plusIcon from "../assets/images/icons/plus.svg";
import User from "./User";
import { WithClassName } from "../types/types";

interface Props {
    onClick?: () => void;
    isExpanded?: boolean;
}

const mainClass = 'user-select';

const UserSelect = ({ className, isExpanded, onClick }: Props & WithClassName) => {
    return (
        <button onClick={onClick} className={classNames(mainClass, className)} type="button" aria-controls="dropdown-menu" aria-expanded={isExpanded} style={{ backgroundImage: `url(${dropArrow})` }}>
            <User size="xs" />
            <div className={`${mainClass}__balance`}>
                <span className="button user-select__balance-item balance-item">
                    <span className="button__text">5 100B</span>
                </span>
                <span className="button user-select__balance-item balance-item balance-item--end button--style_bg-purple">
                    <span className="button__text">5 100₽</span>
                    <button className="balance-item__add">
                        <img src={plusIcon} alt="add" />
                    </button>
                </span>
            </div>
        </button>
    );
};

export default UserSelect;