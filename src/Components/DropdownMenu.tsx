import { Link } from "react-router-dom";
import { Pages } from "../enums/Page";
import { Route } from "../interfaces/Route";
import Logout from "./icons/Logout";
import menuBg from "../assets/images/menu-bg.svg";
import menuClose from "../assets/images/icons/menu-close.svg";
import topClose from "../assets/images/icons/close-simple.svg";
import UserSelect from "./UserSelect";
import classNames from "classnames";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ClassName } from "../enums/ClassName";
import { Id } from "../enums/Id";
import { ButtonType } from "../enums/ButtonType";
import Image from "./Image";

const mainClass = ClassName.DropdownMenu;

const DropdownMenu = () => {
    const { closeProfileMenu } = useActions();
    const { isProfileMenuOpen } = useTypedSelector((state) => state.menuReducer);

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeProfileMenu();
    }

    return (
        <nav id={Id.DropdownMenu} className={classNames(mainClass, {
            [ClassName.Active]: isProfileMenuOpen
        })} aria-label="Выпадающее" style={{ backgroundImage: `url(${menuBg})` }}>
            <div className={`${mainClass}__top`}>
                <div className={`${mainClass}__title`}>Меню</div>
                <button onClick={handleClose} className={`${mainClass}__top-close`} type={ButtonType.Button} aria-label="Закрыть меню">
                    <Image src={topClose} alt="close" width={18} height={18} />
                </button>
            </div>
            <UserSelect className={`${mainClass}__user`} />
            <ul className={`${mainClass}__list`}>
                {Pages.profile.map((page) => page[Object.keys(page)[0]]).map((page: Route, index) => (
                    <li key={index}>
                        <Link onClick={handleClose} to={page.path} className={`${mainClass}__link`}>
                            {page.icon}
                            <span>{page.title}</span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link onClick={handleClose} to="/" className={`${mainClass}__link`}>
                        {<Logout />}
                        <span>Выйти из аккаунта</span>
                    </Link>
                </li>
            </ul>
            <button onClick={handleClose} className={`${mainClass}__close`} type={ButtonType.Button} aria-label="Закрыть меню">
                <Image src={menuClose} alt="close" width={85} height={85} />
            </button>
        </nav>
    );
};

export default DropdownMenu;