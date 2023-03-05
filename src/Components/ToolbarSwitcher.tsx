import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
    icon: ReactNode;
    isActive?: boolean;
}

const ToolbarSwitcher = ({ icon, isActive }: Props) => {
    return (
        <button className={classNames('toolbar-switcher', {
            'active': isActive
        })} type="button">
            {icon}
        </button>
    );
};

export default ToolbarSwitcher;