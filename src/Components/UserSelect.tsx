import dropArrow from "../assets/images/icons/drop-arrow.svg";
import plusIcon from "../assets/images/icons/plus.svg";
import User from "./User";

interface Props {
    onClick: () => void;
    isExpanded: boolean;
}

const UserSelect = ({ isExpanded, onClick }: Props) => {
    return (
        <button onClick={onClick} className="user-select" type="button" aria-controls="dropdown-menu" aria-expanded={isExpanded} style={{ backgroundImage: `url(${dropArrow})` }}>
            <User size="xs" />
            <div className="user-select__balance">
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