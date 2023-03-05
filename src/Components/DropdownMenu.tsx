import { Link } from "react-router-dom";
import { Pages } from "../enums/Page";
import { Route } from "../interfaces/Route";
import Logout from "./icons/Logout";

const DropdownMenu = () => {
    return (
        <nav id="dropdown-menu" className="dropdown-menu" aria-label="Dropdown">
            <ul className="dropdown-menu__list">
                {Pages.profile.map((page) => page[Object.keys(page)[0]]).map((page: Route, index) => (
                    <li key={index}>
                        <Link to={page.path} className="dropdown-menu__link">
                            {page.icon}
                            {page.title}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="/" className="dropdown-menu__link">
                        {<Logout />}
                        Выйти из аккаунта
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default DropdownMenu;