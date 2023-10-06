import { ReactNode, useState, useRef, useMemo } from "react";
import { InputType } from "../enums/InputType";
import Edit from "./icons/Edit";
import { ButtonType } from "../enums/ButtonType";

interface Props {
    type?: InputType;
    label: string;
    value?: string;
    activeValue?: string;
    inActiveValue?: string;
    toggle?: boolean;
    editButton?: boolean;
    icon?: ReactNode;
    secure?: boolean;
}

const mainClass = 'field';

const Field = ({ type, label, value, icon, toggle, activeValue, inActiveValue, editButton, secure }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const values = [activeValue, inActiveValue];
    const [toggleValue, setToggleValue] = useState(values[0]);

    const handleToggleValue = () => {
        setToggleValue(values.filter((value) => value !== toggleValue)[0]);
    }

    const handleEdit = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const inputValue = useMemo(() => {
        if (type === InputType.Password) {
            return value?.split('').map((_) => '*').join('');
        }

        if (secure) {
            const valueArray = value?.split('');
            return valueArray?.map((value, index) => index > 2 && index < valueArray.length - 2 ? '*' : value).join('');
        }

        return value;
    }, [type, secure]);

    return (
        <label className={mainClass} style={{ backgroundImage: icon ? `url(${icon})` : 'none' }}>
            <span className={`${mainClass}__label`}>{label}</span>
            {toggle ?
                <button onClick={handleToggleValue} className={`${mainClass}__input`} type={ButtonType.Button}>
                    {toggleValue}
                </button>
                : <input ref={inputRef} className={`${mainClass}__input`} value={inputValue} type={type ?? InputType.Text} />
            }
            {editButton &&
                <button onClick={handleEdit} className={`edit-btn ${mainClass}__edit`} type={ButtonType.Button}>
                    <Edit />
                </button>
            }
        </label>
    );
};

export default Field;