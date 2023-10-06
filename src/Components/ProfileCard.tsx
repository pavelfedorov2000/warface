import { ReactNode } from "react";
import userAvatar from "../assets/images/user.png";
import Button from "./Button";

interface Props {
    online?: boolean;
    actionButton: ReactNode;
}

const mainClass = 'profile-card';

const ProfileCard = ({ online, actionButton }: Props) => {
    return (
        <section className={mainClass}>
            <div className={`${mainClass}__avatar`}>
                <img src={userAvatar} alt="avatar" />
                <a className={`${mainClass}__icon`} href="#">
                    {actionButton}
                </a>
            </div>
            <h2 className={`${mainClass}__name`}>Shenderro</h2>
            {online &&
                <div className={`${mainClass}__status`}>
                    Online
                </div>
            }
            <Button className={`${mainClass}__logout`} style="link" text="Выйти из аккаунта" />
        </section>
    );
};

export default ProfileCard;