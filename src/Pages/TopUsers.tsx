import { TopThreeUsers, UsersTable } from "../Components";
import { PageTop } from "../Components/Layout";
import { TOP_USERS } from "../constants/top-users";
import { Page } from "../interfaces/Route";

const TopUsers = ({ title }: Page) => {
    return (
        <main className="page__content page__content--small">
            <PageTop title={title} />

            <TopThreeUsers users={TOP_USERS.slice(0, 3)} />

            <UsersTable users={[{
                id: 8,
                userName: 'Shenderro',
                place: 4856,
                goods: '863',
                revenue: '58 924'
            }]} currentUSer />

            <UsersTable users={TOP_USERS.slice(3)} />
        </main>
    );
};

export default TopUsers;