import { TopThreeUsers, UsersTable } from "../Components";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";
import { TopUser } from "../interfaces/TopUser";

const TOP_USERS: TopUser[] = [{
    id: 1,
    place: 1,
    userName: 'Santchezz',
    goods: '34 2819',
    revenue: '118 523₽'
}, {
    id: 2,
    place: 2,
    userName: 'Santchezz',
    goods: '34 2819',
    revenue: '118 523₽'
}, {
    id: 3,
    place: 3,
    userName: 'Santchezz',
    goods: '34 2819',
    revenue: '118 523₽'
}, {
    id: 4,
    place: 4,
    userName: 'Evhen_823',
    goods: '863',
    revenue: '58 924₽'
}, {
    id: 5,
    place: 5,
    userName: 'Evhen_823',
    goods: '863',
    revenue: '58 924₽'
}, {
    id: 6,
    place: 6,
    userName: 'Evhen_823',
    goods: '863',
    revenue: '58 924₽'
}, {
    id: 7,
    place: 6,
    userName: 'Evhen_823',
    goods: '863',
    revenue: '58 924₽'
}];

const TopUsers = ({ title }: Page) => {
    return (
        <main className="page__content page__content--small">
            <PageTop title={title} />

            <TopThreeUsers users={[...TOP_USERS.slice(0, 3)]} />

            <UsersTable users={[{
                id: 8,
                userName: 'Shenderro',
                place: 4856,
                goods: '863',
                revenue: '58 924'
            }]} currentUSer />

            <UsersTable users={[...TOP_USERS.slice(3)]} />
        </main>
    );
};

export default TopUsers;