import { useState, useRef } from 'react';
import ActionButton from '../ActionButton';
import DropdownMenu from '../DropdownMenu';
import UserSelect from '../UserSelect';
import NotifyIcon from '../icons/NotifyIcon';
import Menu from '../Menu';
import NotificationsDropdown from '../NotificationsDropdown';
import useHandleOutsideClick from '../../hooks/useHandleOutsideClick';
import logoBg from '../../assets/images/header-bg.svg';
import { User } from '../icons';
import Logo from '../Logo';
import logo from '../../assets/images/logo/logo-main.png';
import BurgerButton from '../Burger/BurgerButton';
import { useActions } from '../../hooks/useActions';
import { ClassName } from '../../enums/ClassName';
import { Color } from '../../enums/Color';

const mainClass = 'header';

const Header = () => {
    const { openProfileMenu } = useActions();

    const handleOpenProfileMenu = () => {
        document.body.classList.add(ClassName.Lock);
        openProfileMenu();
    }

    const dropdownNotificationsRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const [visibleNotifications, setVisibleNotifications] = useState(false);
    const toggleNotificationsVisibility = () => {
        setVisibleNotifications((v) => !v);
    }

    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
    const toggleDropdownMenuVisibility = () => {
        setDropdownMenuVisible((v) => !v);
    }

    useHandleOutsideClick(dropdownNotificationsRef, setVisibleNotifications);
    useHandleOutsideClick(dropdownMenuRef, setDropdownMenuVisible);

    return (
        <header className={mainClass} style={{ backgroundImage: `url(${logoBg})` }}>
            <div className={`${mainClass}__inner`}>
                <Logo className="header" src={logo} width={146} height={71} />
                <Menu className={`${mainClass}__menu`} />
                <div className={`${mainClass}__actions`}>
                    <div ref={dropdownNotificationsRef} className={`${mainClass}__action`}>
                        <ActionButton onClick={toggleNotificationsVisibility} isExpanded={visibleNotifications} bg={Color.Green} icon={<NotifyIcon />} />
                        <NotificationsDropdown />
                    </div>
                    <div className={`${mainClass}__action touch-visible`}>
                        <ActionButton onClick={handleOpenProfileMenu} bg="orange" icon={<User />} aria-controls="dropdown-menu" />
                    </div>
                    <div ref={dropdownMenuRef} className={`${mainClass}__action`}>
                        <UserSelect onClick={toggleDropdownMenuVisibility} isExpanded={dropdownMenuVisible} />
                        <DropdownMenu />
                    </div>
                </div>
                <BurgerButton />
            </div>
        </header>
    );
}

export default Header;