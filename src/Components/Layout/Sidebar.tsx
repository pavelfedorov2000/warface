import Logo from "../Logo";
import SidebarNav from "../SidebarNav";
import SidebarStatus from "../SidebarStatus";
import logo from '../../assets/images/logo/logo.svg';
import BottomSidebar from "../BottomSidebar";

const mainClass = 'sidebar';

const Sidebar = () => {
    return (
        <aside className={mainClass}>
            <div className={`${mainClass}__top`}>
                <Logo src={logo} width={420} height={150} />
            </div>
            <div className={`${mainClass}__body`}>
                <SidebarStatus className={`${mainClass}__status`} />
                <SidebarNav />
            </div>
            <BottomSidebar />
        </aside>
    );
};

export default Sidebar;