import classNames from "classnames";
import close from "../assets/images/icons/close-simple.svg";
import { WithClassName } from "../types/types";
import Image from "./Image";

interface Props {
    onClick?: () => void;
    ariaLabel: string;
}

const CloseButton = ({ onClick, className, ariaLabel }: Props & WithClassName) => {
    const closeButtonIcon = {
        src: close,
        alt: 'крестик',
        width: 20,
        height: 20,
    };

    return (
        <button onClick={onClick} className={classNames('close-button', className)} aria-label={ariaLabel} type="button">
            <Image {...closeButtonIcon} />
        </button>
    );
};

export default CloseButton;