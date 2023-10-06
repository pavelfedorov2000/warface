import classNames from "classnames";
import avatar from "../assets/images/user.png";
import Image from "./Image";

const mainClass = 'user';

const User = ({ size }: { size?: string; }) => {
    return (
        <div className={classNames(mainClass, size && `${mainClass}--size_${size}`)}>
            <Image className={`${mainClass}__avatar`} src={avatar} alt="avatar" width={59} height={59} />
            <span className={`${mainClass}__name`}>Shanderro</span>
        </div>
    );
};

export default User;