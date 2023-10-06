import classNames from "classnames";
import { Status as StatusType } from "../interfaces/Status";
import { WithClassName } from "../types/types";

const Status = ({ className, bg, icon, value, descr }: StatusType & WithClassName) => {
    return (
        <div className="status">
            <div className={classNames('action-button', className, bg && `action-button--style_bg-${bg}`)}>
                {icon}
            </div>
            <div className="status__text">
                <span className="status__value">{value}</span>
                <span className="status__descr">{descr}</span>
            </div>
        </div>
    );
};

export default Status;