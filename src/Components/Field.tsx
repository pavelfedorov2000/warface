import { ReactNode, useState, useRef } from "react";
import { InputType } from "../enums/InputType";
import Edit from "./icons/Edit";

interface Props {
    type?: InputType.Text | InputType.Phone | InputType.Email | InputType.Password;
    label: string;
    value?: string;
    activeValue?: string;
    inActiveValue?: string;
    toggle?: boolean;
    editButton?: boolean;
    icon?: ReactNode;
    secure?: boolean;
}

const Field = ({ type, label, value, icon, toggle, activeValue, inActiveValue, editButton, secure }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const values = [activeValue, inActiveValue];
    const [toggleValue, setToggleValue] = useState(values[0]);

    const handleToggleValue = () => {
        setToggleValue(values.filter((value) => value !== toggleValue)[0]);
    }

    const handleEdit = () => {
        inputRef.current && inputRef.current.focus();
    }

    function generateValue() {
        if (type === InputType.Password) {
            return value?.split('').map((_) => '*').join('');
        }

        if (secure) {
            const valueArray = value?.split('');
            return valueArray?.map((value, index) => index > 2 && index < valueArray.length - 2 ? '*' : value).join('');
        }

        return value;
    }

    return (
        <label className="field" style={{ backgroundImage: icon ? `url(${icon})` : 'none' }}>
            <span className="field__label">
                {label}
            </span>
            {
                toggle ?
                    <button onClick={handleToggleValue} className="field__input" type="button">
                        {toggleValue}
                    </button>
                    : <input ref={inputRef} className="field__input" value={generateValue()} type={type ?? InputType.Text} />
            }
            {editButton &&
                <button onClick={handleEdit} className="edit-btn field__edit" type="button">
                    <Edit />
                </button>
            }
        </label>
    );
};

export default Field;