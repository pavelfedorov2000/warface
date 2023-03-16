import classNames from "classnames";
import close from "../assets/images/icons/close-simple.svg";

interface Props {
    onClick?: () => void;
    className?: string;
    ariaLabel: string;
}

const CloseButton = ({ onClick, className, ariaLabel }: Props) => {
    return (
        <button onClick={onClick} className={classNames('close-button', className)} aria-label={ariaLabel} type="button">
            <img src={close} alt="крестик" width="20" height="20" />
        </button>
    );
};

export default CloseButton;