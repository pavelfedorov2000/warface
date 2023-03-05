import Gift from "./icons/Gift";
import User from "./icons/User";
import ToolbarSwitcher from "./ToolbarSwitcher";

const ToolbarSwitchers = () => {
    return (
        <div className="toolbar-switchers">
            <ToolbarSwitcher icon={<User />} />
            <ToolbarSwitcher icon={<Gift />} isActive />
        </div>
    );
};

export default ToolbarSwitchers;