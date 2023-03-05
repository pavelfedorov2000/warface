import userAvatar from "../assets/images/user.png";
import Vk from "./icons/Vk";

const ProfileCard = () => {
    return (
        <section className="profile-card">
            <div className="profile-card__avatar">
                <img src={userAvatar} alt="avatar" />
                <a className="profile-card__icon" href="#">
                    <Vk />
                </a>
            </div>
            <h2 className="profile-card__name">Shenderro</h2>
            <div className="profile-card__status">
                Online
            </div>
            <button className="button profile-card__logout button--style_link">
                Выйти из аккаунта
            </button>
        </section>
    );
};

export default ProfileCard;