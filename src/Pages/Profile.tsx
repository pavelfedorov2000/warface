import { AchievementCard, ProfileCard, ProfileInfo, ProfileReviews } from "../Components";
import Vk from "../Components/icons/Vk";
import { PageTop } from "../Components/Layout";
import ProfileCardSection from "../Components/ProfileCardSection";
import { ACHIEVEMENTS } from "../constants/achievements";

const Profile = () => {
    return (
        <main className="page__content">
            <PageTop title="Личный профиль" />
            <div className="profile">
                <ProfileCard actionButton={<Vk />} online />
                <ProfileInfo />
                <div className="profile__cards">
                    <ProfileCardSection title="Достижения" link="achievements" items={ACHIEVEMENTS.slice(0, 3)} Card={AchievementCard} />
                </div>
                <ProfileReviews />
            </div>
        </main>
    );
}

export default Profile;