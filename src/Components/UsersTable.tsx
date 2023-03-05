import { TopUser } from "../interfaces/TopUser";
import UsersTableRow from "./UsersTableRow";

interface Props {
    users: TopUser[];
    currentUSer?: boolean;
}

const UsersTable = ({ users, currentUSer }: Props) => {
    return (
        <div className="users-table">
            <div className="users-table-row users-table__head">
                <div className="users-table__cell">
                    {currentUSer ? 'Ваше место' : 'Место'}
                </div>
                {!currentUSer &&
                    <>
                        <div className="users-table__cell">Пользователь</div>
                        <div className="users-table__cell">Купленные товары</div>
                        <div className="users-table__cell">Заработанно</div>
                    </>
                }
            </div>
            <div className="users-table__body">
                {users.map((user) => (
                    <UsersTableRow key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};

export default UsersTable;