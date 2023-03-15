import { ReactNode } from "react";
import userAvatar from "../assets/images/user.png";
import Button from "./Button";

interface Props {
    online?: boolean;
    actionButton: ReactNode;
}

const ProfileCard = ({ online, actionButton }: Props) => {
    return (
        <section className="profile-card">
            <div className="profile-card__avatar">
                <img src={userAvatar} alt="avatar" />
                <a className="profile-card__icon" href="#">
                    {actionButton}
                </a>
            </div>
            <h2 className="profile-card__name">Shenderro</h2>
            {online &&
                <div className="profile-card__status">
                    Online
                </div>
            }
            <Button className="profile-card__logout" style="link" text="Выйти из аккаунта" />
        </section>
    );
};

export default ProfileCard;