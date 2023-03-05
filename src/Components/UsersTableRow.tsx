import { TopUser } from "../interfaces/TopUser";
import User from "./User";

const UsersTableRow = ({ place, goods, revenue }: TopUser) => {
    return (
        <div className="users-table-row">
            <div className="users-table__cell">{place}</div>
            <div className="users-table__cell">
                <User />
            </div>
            <div className="users-table__cell">{goods}</div>
            <div className="users-table__cell">{revenue}</div>
        </div>
    );
};

export default UsersTableRow;