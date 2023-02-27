import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
    className?: string;
}

const NavHeader = ({ className }: Props) => {
    return (
        <nav className={classNames('nav-header', className)}>
            <ul className="nav-header__list">
                
            </ul>
        </nav>
    );
}

export default NavHeader;