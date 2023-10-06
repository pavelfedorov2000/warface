import classNames from "classnames";
import ShoppingBox from "./icons/ShoppingBox";
import User from "./icons/User";
import Status from "./Status";
import { WithClassName } from "../types/types";

const SidebarStatus = ({ className }: WithClassName) => {
    return (
        <div className={classNames('sidebar-status', className)}>
            <Status className="mr-12" icon={<ShoppingBox />} bg="green" descr="Купленно товаров" value="181 924 36" />
            <Status className="mr-12" icon={<User />} bg="purple" descr="Пользователей" value="486 532" />
        </div>
    );
};

export default SidebarStatus;