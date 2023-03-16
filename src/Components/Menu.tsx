import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pages } from "../enums/Page";
import { useActions } from "../hooks/useActions";
import { Route } from "../interfaces/Route";

interface Props {
    className?: string;
}

const Menu = ({ className }: Props) => {
    const { closeBurgerMenu } = useActions();
    const history = useHistory();
    const menuLinks = Pages.main.map((page) => page[Object.keys(page)[0]]);
    const activeLinkIndex = menuLinks.findIndex((link) => link.path === history.location.pathname);

    const handleCloseMenu = () => {
        document.body.classList.remove('_lock');
        closeBurgerMenu();
    }

    return (
        <nav className={classNames('menu', className)}>
            <ul className="menu__list">
                {[...menuLinks.slice(1)].map((page: Route, index: number) => (
                    <li key={page.id}>
                        <Link onClick={handleCloseMenu} to={page.path} className={classNames('menu__link', {
                            'active': index === activeLinkIndex - 1
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