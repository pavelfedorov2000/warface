import burger from '../../assets/images/icons/burger.svg';
import { useActions } from '../../hooks/useActions';

const BurgerButton = () => {
    const { openBurgerMenu } = useActions();

    const handleOpenMenu = () => {
        document.body.classList.add('_lock');
        openBurgerMenu();
    }

    return (
        <button onClick={handleOpenMenu} className="burger-button" type="button" aria-label="Открыть меню" aria-controls="burger-menu">
            <img src={burger} alt="burger" width="30" height="21" />
        </button>
    );
}

export default BurgerButton;