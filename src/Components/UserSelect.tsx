import classNames from "classnames";
import dropArrow from "../assets/images/icons/drop-arrow.svg";
import plusIcon from "../assets/images/icons/plus.svg";
import User from "./User";
import { WithClassName } from "../types/types";
import { Id } from "../enums/Id";
import { ButtonType } from "../enums/ButtonType";
import Image from "./Image";

interface Props {
    onClick?: () => void;
    isExpanded?: boolean;
}

const mainClass = 'user-select';

const UserSelect = ({ className, isExpanded, onClick }: Props & WithClassName) => {
    return (
        <button onClick={onClick} className={classNames(mainClass, className)} type={ButtonType.Button} aria-controls={Id.DropdownMenu} aria-expanded={isExpanded} style={{ backgroundImage: `url(${dropArrow})` }}>
            <User size="xs" />
            <div className={`${mainClass}__balance`}>
                <span className={`button ${mainClass}__balance-item balance-item`}>
                    <span className="button__text">5 100B</span>
                </span>
                <span className="button user-select__balance-item balance-item balance-item--end button--style_bg-purple">
                    <span className="button__text">5 100₽</span>
                    <button className="balance-item__add">
                        <Image src={plusIcon} alt="add" width={12} height={12} />
                    </button>
                </span>
            </div>
        </button>
    );
};

export default UserSelect;