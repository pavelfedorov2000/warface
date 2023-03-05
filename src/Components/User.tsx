import classNames from "classnames";
import avatar from "../assets/images/user.png";

interface Props {
    size?: string;
}

const User = ({ size }: Props) => {
    return (
        <div className={classNames('user', size && `user--size_${size}`)}>
            <img className="user__avatar" src={avatar} alt="avatar" />
            <span className="user__name">Shanderro</span>
        </div>
    );
};

export default User;