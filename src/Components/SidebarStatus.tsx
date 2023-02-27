import axios from "axios";
import { useEffect, useState } from "react";
import { Status as StatusType } from "../interfaces/Status";
import ShoppingBox from "./icons/ShoppingBox";
import User from "./icons/User";
import Status from "./Status";

const statusesBase = [{
    bg: 'green',
    icon: <ShoppingBox />,
    descr: "Купленно товаров"
}, {
    bg: 'purple',
    icon: <User />,
    descr: "Пользователей"
}];

const SidebarStatus = () => {
    const [statuses, setStatuses] = useState<StatusType[]>([]);

    useEffect(() => {
        axios.get('/sidebar').then(({ data }) => {
            setStatuses(data.status.items.map((item: StatusType, index: number) => {
                return {
                    ...item[Object.keys(item)[0]],
                    ...statusesBase[index]
                }
            }));
        });
    }, []);

    return (
        <div className="sidebar-status mb-44">
            {statuses.map((status, index) => (
                <Status key={index} className="mr-12" {...status} />
            ))}
        </div>
    );
};

export default SidebarStatus;