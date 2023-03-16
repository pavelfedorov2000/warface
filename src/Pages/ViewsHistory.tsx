import { useState } from "react";
import { ViewsHistoryList } from "../Components";
import { PageTop } from "../Components/Layout";
import { VIEWS_HISTORY } from "../constants/views-history";
import { Page } from "../interfaces/Route";

const ViewsHistory = ({ title }: Page) => {
    const [viewsHistoryItems, setViewsHistoryItems] = useState(VIEWS_HISTORY);

    return (
        <main className="page__content page__content--w-900">
            <PageTop items={VIEWS_HISTORY} setItems={setViewsHistoryItems} title={title} search />
            <ViewsHistoryList items={viewsHistoryItems} />
        </main>
    );
};

export default ViewsHistory;