import warfaceLogo from "../assets/images/logo/warface.png";
import Button from "./Button";
import ChatIcon from "./icons/ChatIcon";
import Headphones from "./icons/Headphones";

const BottomSidebar = () => {
    return (
        <div className="bottom-sidebar">
            <div className="button bottom-sidebar__logo-btn button--border">
                <img src={warfaceLogo} alt="warface" />
                <span className="button__text">Warface</span>
            </div>
            <div className="bottom-sidebar__btns">
                <Button href="/" className="bottom-sidebar__btn" icon={<ChatIcon />} text="Мои сообщения" border />
                <Button href="/support" className="bottom-sidebar__btn" icon={<Headphones />} text="Тех. Поддержка" border />
            </div>
        </div>
    );
};

export default BottomSidebar;