import classNames from "classnames";
import allice from "../assets/images/allice.png";
import { OnlineStatus } from "../enums/OnlineStatus";
import { BaseUser } from "../interfaces/User";

interface Props extends BaseUser {
    className?: string;
}

const SmallUser = ({ className, name, status }: Props) => {
    return (
        <div className={classNames('small-user', className, {
            'online': status === OnlineStatus.Online
        })}>
            <div className="small-user__avatar">
                <img src={allice} alt="avatar" />
            </div>
            <span className="small-user__name">{name}</span>
        </div>
    );
};

export default SmallUser;