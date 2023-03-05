import classNames from "classnames";
import allice from "../assets/images/allice.png";
import { BaseUser } from "../interfaces/User";

interface Props extends BaseUser {
    className?: string;
}

const SmallUser = ({ className, name, online }: Props) => {
    return (
        <div className={classNames('small-user', className, {
            'online': online
        })}>
            <div className="small-user__avatar">
                <img src={allice} alt="avatar" />
            </div>
            <span className="small-user__name">{name}</span>
        </div>
    );
};

export default SmallUser;