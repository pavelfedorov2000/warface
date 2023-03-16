import { ViewsHistory } from "../interfaces/ViewsHistory";
import ViewsHistoryItem from "./ViewsHistoryItem";

interface Props {
    items: ViewsHistory[];
}

const ViewsHistoryList = ({ items }: Props) => {
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