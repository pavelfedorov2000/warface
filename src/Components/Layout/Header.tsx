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

const Header = () => {
    const { openProfileMenu } = useActions();

    const handleOpenProfileMenu = () => {
        document.body.classList.add('_lock');
        openProfileMenu();
    }

    const dropdownNotificationsRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const [visibleNotifications, setVisibleNotifications] = useState(false);
    const toggleNotificationsVisibility = () => {
        setVisibleNotifications((prevState) => !prevState);
    }

    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
    const toggleDropdownMenuVisibility = () => {
        setDropdownMenuVisible((prevState) => !prevState);
    }

    useHandleOutsideClick(dropdownNotificationsRef, setVisibleNotifications);
    useHandleOutsideClick(dropdownMenuRef, setDropdownMenuVisible);

    return (
        <header className="header" style={{ backgroundImage: `url(${logoBg})` }}>
            <div className="header__inner">
                <Logo className="header" src={logo} width="146" height="71" />
                <Menu className="header__menu" />
                <div className="header__actions">
                    <div ref={dropdownNotificationsRef} className="header__action">
                        <ActionButton onClick={toggleNotificationsVisibility} isExpanded={visibleNotifications} bg="green" icon={<NotifyIcon />} />
                        <NotificationsDropdown />
                    </div>
                    <div className="header__action touch-visible">
                        <ActionButton onClick={handleOpenProfileMenu} bg="orange" icon={<User />} aria-controls="dropdown-menu" />
                    </div>
                    <div ref={dropdownMenuRef} className="header__action">
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