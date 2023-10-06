import { Link } from "react-router-dom";
import warfaceLogo from "../assets/images/logo/warface.png";
import Button from "./Button";
import ChatIcon from "./icons/ChatIcon";
import Headphones from "./icons/Headphones";

const mainClass = 'bottom-sidebar';

const BottomSidebar = () => {
    return (
        <div className={mainClass}>
            <Link to="/" className="button bottom-sidebar__logo-btn button--border">
                <img src={warfaceLogo} alt="warface" />
                <span className="button__text">Warface</span>
            </Link>
            <div className={`${mainClass}__btns`}>
                <Button href="/" className={`${mainClass}__btn`} icon={<ChatIcon />} text="Мои сообщения" border />
                <Button href="/support" className={`${mainClass}__btn`} icon={<Headphones />} text="Тех. Поддержка" border />
            </div>
        </div>
    );
};

export default BottomSidebar;