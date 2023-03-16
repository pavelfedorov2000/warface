import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import SidebarNav from '../SidebarNav';
import Menu from '../Menu';
import CloseButton from '../CloseButton';

const BurgerMenu = () => {
    const { isBurgerMenuOpen } = useTypedSelector((state) => state.menuReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove('_lock');
        closeBurgerMenu();
    }

    return (
        <div id="burger-menu" className={classNames('burger-menu', {
            'active': isBurgerMenuOpen
        })}>
            <CloseButton onClick={handleClose} className="burger-menu__close" ariaLabel="Закрыть меню" />
            <Menu className="burger-menu__nav" />
            <SidebarNav />
        </div>
    );
}

export default BurgerMenu;