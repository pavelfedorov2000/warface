import { NotificationsList } from "../Components";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const Notifications = ({ title }: Page) => {
    return (
        <main className="page__content page__content--w-1140">
            <PageTop title={title} />
            <NotificationsList />
        </main>
    );
};

export default Notifications;