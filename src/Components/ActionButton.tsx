import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
    className?: string;
    icon: ReactNode;
    children?: ReactNode;
}

const ActionButton = ({ className, icon, children }: Props) => {
    return (
        <button className={classNames('action-button', className)} type="button">
            {icon}
            {children ?? null}
        </button>
    );
};

export default ActionButton;