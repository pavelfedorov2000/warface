import { ViewsHistory } from "../interfaces/ViewsHistory";
import ViewsHistoryItem from "./ViewsHistoryItem";

const ViewsHistoryList = ({ items }: { items: ViewsHistory[]; }) => {
    return (
        <ul className="views-history">
            {items.map((item, index) => (
                <li key={index}>
                    <ViewsHistoryItem {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ViewsHistoryList;