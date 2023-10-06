import classNames from "classnames";
import { Status as StatusType } from "../interfaces/Status";
import { WithClassName } from "../types/types";

const mainClass = 'status';

const Status = ({ className, bg, icon, value, descr }: StatusType & WithClassName) => {
    return (
        <div className={mainClass}>
            <div className={classNames('action-button', className, bg && `action-button--style_bg-${bg}`)}>
                {icon}
            </div>
            <div className={`${mainClass}__text`}>
                <span className={`${mainClass}__value`}>{value}</span>
                <span className={`${mainClass}__descr`}>{descr}</span>
            </div>
        </div>
    );
};

export default Status;