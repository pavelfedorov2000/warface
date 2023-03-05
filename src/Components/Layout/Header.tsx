import { useState, useRef } from 'react';
import ActionButton from '../ActionButton';
import DropdownMenu from '../DropdownMenu';
import UserSelect from '../UserSelect';
import NotifyIcon from '../icons/NotifyIcon';
import Menu from '../Menu';
import NotificationsDropdown from '../NotificationsDropdown';
import useHandleOutsideClick from '../../hooks/useHandleOutsideClick';

const Header = () => {
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
        <header className="header">
            <div className="header__inner">
                <Menu />
                <div className="header__actions">
                    <div ref={dropdownNotificationsRef} className="header__action">
                        <ActionButton onClick={toggleNotificationsVisibility} isExpanded={visibleNotifications} bg="green" icon={<NotifyIcon />} />
                        <NotificationsDropdown />
                    </div>
                    <div ref={dropdownMenuRef} className="header__action">
                        <UserSelect onClick={toggleDropdownMenuVisibility} isExpanded={dropdownMenuVisible} />
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;