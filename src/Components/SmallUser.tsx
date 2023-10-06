import classNames from "classnames";
import allice from "../assets/images/allice.png";
import { OnlineStatus } from "../enums/OnlineStatus";
import { BaseUser } from "../interfaces/User";
import { WithClassName } from "../types/types";
import Image from "./Image";

const mainClass = 'small-user';

const SmallUser = ({ className, name, status }: BaseUser & WithClassName) => {
    return (
        <div className={classNames(mainClass, className, {
            'online': status === OnlineStatus.Online
        })}>
            <div className={`${mainClass}__avatar`}>
                <Image src={allice} alt="avatar" width={70} height={54} />
            </div>
            <span className={`${mainClass}__name`}>{name}</span>
        </div>
    );
};

export default SmallUser;