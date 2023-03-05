import { PROFILE_INFO } from "../constants/profile-info";
import ProfileInfoList from "./ProfileInfoList";
import ProfileRating from "./ProfileRating";
import Tabs from "./Tabs";

const ProfileInfo = () => {
    const { list, rating, tabs } = PROFILE_INFO;

    return (
        <section className="profile-info">
            <div className="profile-info__body">
                <ProfileInfoList {...list} />
                <ProfileRating {...rating} />
            </div>
            <Tabs className="profile-info__tabs" style="2" {...tabs} />
        </section>
    );
};

export default ProfileInfo;