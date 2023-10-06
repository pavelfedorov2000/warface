import burger from '../../assets/images/icons/burger.svg';
import { ButtonType } from '../../enums/ButtonType';
import { ClassName } from '../../enums/ClassName';
import { Id } from '../../enums/Id';
import { useActions } from '../../hooks/useActions';
import Image from '../Image';

const burgerMap = {
    className: 'burger-button',
    ariaLabel: 'Открыть меню',
    controls: Id.BurgerMenu,
    type: ButtonType.Button,
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
        <button onClick={handleOpenMenu} className={burgerMap.className} type={burgerMap.type} aria-label={burgerMap.ariaLabel} aria-controls={burgerMap.controls}>
            <Image {...burgerMap.icon} src={burger} />
        </button>
    );
}

export default BurgerButton;