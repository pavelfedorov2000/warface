import { TopUser } from "../interfaces/TopUser";
import { WithClassName } from "../types/types";
import User from "./User";

const UsersTableRow = ({ className, place, goods, revenue }: TopUser & WithClassName) => {
    return (
        <div className="users-table-row">
            <div className={`${className}__cell`}>{place}</div>
            <div className={`${className}__cell`}>
                <User />
            </div>
            <div className={`${className}__cell`}>{goods}</div>
            <div className={`${className}__cell`}>{revenue}</div>
        </div>
    );
};

export default UsersTableRow;