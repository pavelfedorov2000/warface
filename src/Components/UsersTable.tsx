import { TopUser } from "../interfaces/TopUser";
import UsersTableRow from "./UsersTableRow";

interface Props {
    users: TopUser[];
    currentUSer?: boolean;
}

const mainClass = 'users-table';

const UsersTable = ({ users, currentUSer }: Props) => {
    return (
        <div className={mainClass}>
            <div className={`users-table-row ${mainClass}__head`}>
                <div className={`${mainClass}__cell`}>
                    {currentUSer ? 'Ваше место' : 'Место'}
                </div>
                {!currentUSer &&
                    <>
                        <div className={`${mainClass}__cell`}>Пользователь</div>
                        <div className={`${mainClass}__cell`}>Купленные товары</div>
                        <div className={`${mainClass}__cell`}>Заработанно</div>
                    </>
                }
            </div>
            <div className={`${mainClass}__body`}>
                {users.map((user) => (
                    <UsersTableRow key={user.id} {...user} className={mainClass} />
                ))}
            </div>
        </div>
    );
};

export default UsersTable;