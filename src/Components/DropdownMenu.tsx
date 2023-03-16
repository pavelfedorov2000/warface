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

const DropdownMenu = () => {
    const { closeProfileMenu } = useActions();
    const { isProfileMenuOpen } = useTypedSelector((state) => state.menuReducer);

    const handleClose = () => {
        document.body.classList.remove('_lock');
        closeProfileMenu();
    }

    return (
        <nav id="dropdown-menu" className={classNames('dropdown-menu', {
            'active': isProfileMenuOpen
        })} aria-label="Выпадающее" style={{ backgroundImage: `url(${menuBg})` }}>
            <div className="dropdown-menu__top">
                <div className="dropdown-menu__title">Меню</div>
                <button onClick={handleClose} className="dropdown-menu__top-close" type="button" aria-label="Закрыть меню">
                    <img src={topClose} alt="close" />
                </button>
            </div>
            <UserSelect className="dropdown-menu__user" />
            <ul className="dropdown-menu__list">
                {Pages.profile.map((page) => page[Object.keys(page)[0]]).map((page: Route, index) => (
                    <li key={index}>
                        <Link onClick={handleClose} to={page.path} className="dropdown-menu__link">
                            {page.icon}
                            <span>{page.title}</span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link onClick={handleClose} to="/" className="dropdown-menu__link">
                        {<Logout />}
                        <span>Выйти из аккаунта</span>
                    </Link>
                </li>
            </ul>
            <button onClick={handleClose} className="dropdown-menu__close" type="button" aria-label="Закрыть меню">
                <img src={menuClose} alt="close" />
            </button>
        </nav>
    );
};

export default DropdownMenu;