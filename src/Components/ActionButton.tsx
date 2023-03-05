import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
    onClick?: () => void;
    isExpanded?: boolean;
    bg: string;
    className?: string;
    icon: ReactNode;
}

const ActionButton = ({ onClick, isExpanded, bg, className, icon }: Props) => {
    return (
        <button onClick={onClick} className={classNames('action-button', className, `action-button--style_bg-${bg}`)} type="button" aria-expanded={isExpanded}>
            {icon}
        </button>
    );
};

export default ActionButton;