import { VIEWS_HISTORY } from "../constants/views-history";
import ViewsHistoryItem from "./ViewsHistoryItem";

const ViewsHistoryList = () => {
    return (
        <ul className="views-history">
            {VIEWS_HISTORY.map((item, index) => (
                <li key={index}>
                    <ViewsHistoryItem {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ViewsHistoryList;