import classNames from "classnames";
import { ReactNode } from "react";
import { WithClassName } from "../types/types";

interface Props {
    onClick?: () => void;
    isExpanded?: boolean;
    bg: string;
    icon: ReactNode;
}

const mainClass = 'action-button';

const ActionButton = ({ onClick, isExpanded, bg, className, icon }: Props & WithClassName) => {
    return (
        <button onClick={onClick} className={classNames(mainClass, className, {
            [`${mainClass}--style_bg-${bg}`]: bg
        })} type="button" aria-expanded={isExpanded}>
            {icon}
        </button>
    );
};

export default ActionButton;