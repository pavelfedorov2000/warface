import Logo from "../Logo";
import SidebarNav from "../SidebarNav";
import SidebarStatus from "../SidebarStatus";
import warfaceLogo from "../../assets/images/logo/warface.png";
import Button from "../Button";
import ChatIcon from "../icons/ChatIcon";
import Headphones from "../icons/Headphones";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <Logo width="420" height="150" />
            </div>
            <div className="sidebar__body">
                <SidebarStatus />
                <SidebarNav />
            </div>
            <div className="sidebar__bottom">
                <div className="button sidebar__logo-btn button--border">
                    <img src={warfaceLogo} alt="warface" />
                    <span className="button__text">Warface</span>
                </div>
                <div className="sidebar__btns"> 
                    <Button href="/" className="sidebar__btn" icon={<ChatIcon />} text="Мои сообщения" border />
                    <Button href="/support" className="sidebar__btn" icon={<Headphones />} text="Тех. Поддержка" border />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;