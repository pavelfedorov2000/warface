import { ViewsHistoryList } from "../Components";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const ViewsHistory = ({ title }: Page) => {
    return (
        <main className="page__content page__content--w-900">
            <PageTop title={title} search />
            <ViewsHistoryList />
        </main>
    );
};

export default ViewsHistory;