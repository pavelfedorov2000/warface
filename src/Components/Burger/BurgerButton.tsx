import burger from '../../assets/images/icons/burger.svg';
import { ClassName } from '../../enums/ClassName';
import { Id } from '../../enums/Id';
import { useActions } from '../../hooks/useActions';

const burgerMap = {
    className: 'burger-button',
    ariaLabel: 'Открыть меню',
    controls: Id.BurgerMenu,
    icon: {
        width: 30,
        height: 20,
        alt: 'burger'
    }
}

const BurgerButton = () => {
    const { openBurgerMenu } = useActions();

    const handleOpenMenu = () => {
        document.body.classList.add(ClassName.Lock);
        openBurgerMenu();
    }

    return (
        <button onClick={handleOpenMenu} className={burgerMap.className} type="button" aria-label={burgerMap.ariaLabel} aria-controls={burgerMap.controls}>
            <img src={burger} alt={burgerMap.icon.alt} width={burgerMap.icon.width} height={burgerMap.icon.height} />
        </button>
    );
}

export default BurgerButton;