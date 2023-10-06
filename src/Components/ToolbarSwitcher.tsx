import classNames from 'classnames';
import { ReactNode } from 'react';
import { ClassName } from '../enums/ClassName';
import { ButtonType } from '../enums/ButtonType';

interface Props {
    icon: ReactNode;
    isActive?: boolean;
}

const ToolbarSwitcher = ({ icon, isActive }: Props) => {
    return (
        <button className={classNames('toolbar-switcher', {
            [ClassName.Active]: isActive
        })} type={ButtonType.Button}>
            {icon}
        </button>
    );
};

export default ToolbarSwitcher;