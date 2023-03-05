import { Chat } from "../Components";
import ContactInfo from "../Components/ContactInfo";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const Support = ({ title }: Page) => {
    return (
        <main className="page__content">
            <PageTop title={title} />

            <div className="support-block">
                <ContactInfo />
                <Chat />
            </div>
        </main>
    );
};

export default Support;