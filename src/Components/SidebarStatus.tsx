import ShoppingBox from "./icons/ShoppingBox";
import User from "./icons/User";
import Status from "./Status";

const SidebarStatus = () => {
    return (
        <div className="sidebar-status mb-44">
            <Status className="mr-12" icon={<ShoppingBox />} bg="green" descr="Купленно товаров" value="181 924 36" />
            <Status className="mr-12" icon={<User />} bg="purple" descr="Пользователей" value="486 532" />
        </div>
    );
};

export default SidebarStatus;