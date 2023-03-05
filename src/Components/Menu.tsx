import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pages } from "../enums/Page";
import { Route } from "../interfaces/Route";

const Menu = () => {
    const history = useHistory();
    const menuLinks = Pages.main.map((page) => page[Object.keys(page)[0]]);
    const activeLinkIndex = menuLinks.findIndex((link) => link.path === history.location.pathname);

    return (
        <nav className="menu">
            <ul className="menu__list">
                {menuLinks.map((page: Route, index: number) => (
                    <li key={page.id}>
                        <Link to={page.path} className={classNames('menu__link', {
                            'active': index === activeLinkIndex
                        })}>
                            {page.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;