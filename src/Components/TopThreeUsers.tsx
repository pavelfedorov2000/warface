import { Medal } from "../enums/Medal";
import { TopUser as TopUserType } from "../interfaces/TopUser";
import TopUser from "./TopUser";

const TopThreeUsers = ({ users }: { users: TopUserType[]; }) => {
    return (
        <div className="top-three-users">
            <TopUser index={2} medal={Medal.Gold} {...users[0]} />
            <TopUser index={1} medal={Medal.Silver} {...users[1]} />
            <TopUser index={3} medal={Medal.Bronze} {...users[2]} />
        </div>
    );
};

export default TopThreeUsers;