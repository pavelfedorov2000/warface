import Logo from "../Logo";
import SidebarNav from "../SidebarNav";
import SidebarStatus from "../SidebarStatus";
import logo from '../../assets/images/logo/logo.svg';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <Logo src={logo} width="420" height="150" />
            </div>
            <div className="sidebar__body">
                <SidebarStatus />
                <SidebarNav />
            </div>

        </aside>
    );
};

export default Sidebar;