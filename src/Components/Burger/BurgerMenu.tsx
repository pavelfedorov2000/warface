import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const BurgerMenu = () => {
    const { isMenuOpen } = useTypedSelector((state) => state.burgerReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove('_lock');
        closeBurgerMenu();
    }

    return (
        <div id="burger-menu" className={classNames('burger-menu', {
            'active': isMenuOpen
        })}>
            <div className="burger-menu__top">
                <button onClick={handleClose} className="burger-menu__close" type="button" aria-label="Закрыть меню">
                    <img src="" alt="крестик" width="20" height="20" />
                </button>
            </div>
        </div>
    );
}

export default BurgerMenu;