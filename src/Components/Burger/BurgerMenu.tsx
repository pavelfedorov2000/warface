import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import SidebarNav from '../SidebarNav';
import Menu from '../Menu';
import CloseButton from '../CloseButton';
import { ClassName } from '../../enums/ClassName';
import { Id } from '../../enums/Id';

const mainClass = 'burger-menu';

const BurgerMenu = () => {
    const { isBurgerMenuOpen } = useTypedSelector((state) => state.menuReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeBurgerMenu();
    }

    return (
        <div id={Id.BurgerMenu} className={classNames(mainClass, {
            [ClassName.Active]: isBurgerMenuOpen
        })}>
            <CloseButton onClick={handleClose} className={`${mainClass}__close`} ariaLabel="Закрыть меню" />
            <Menu className={`${mainClass}__nav`} />
            <SidebarNav />
        </div>
    );
}

export default BurgerMenu;