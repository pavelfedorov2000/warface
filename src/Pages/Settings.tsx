import { ProfileCard, SettingsForm } from "../Components";
import ActionButton from "../Components/ActionButton";
import UploadPhoto from "../Components/icons/UploadPhoto";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const Settings = ({ title }: Page) => {
    return (
        <main className="page__content">
            <PageTop title={title} />

            <div className="settings-block">
                <ProfileCard actionButton={<ActionButton bg="gray" icon={<UploadPhoto />} />} />
                <SettingsForm />
            </div>
        </main>
    );
};

export default Settings;