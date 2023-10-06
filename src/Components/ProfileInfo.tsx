import { PROFILE_INFO } from "../constants/profile-info";
import ProfileInfoList from "./ProfileInfoList";
import ProfileRating from "./ProfileRating";
import Tabs from "./Tabs";

const mainClass = 'profile-info';

const ProfileInfo = () => {
    const { list, rating, tabs } = PROFILE_INFO;

    return (
        <section className={mainClass}>
            <div className={`${mainClass}__body`}>
                <ProfileInfoList {...list} />
                <ProfileRating {...rating} />
            </div>
            <Tabs className={`${mainClass}__tabs`} style="2" {...tabs} />
        </section>
    );
};

export default ProfileInfo;