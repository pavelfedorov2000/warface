import classNames from "classnames";
import checkIcon from "../assets/images/icons/check.svg";
import { ClassName } from "../enums/ClassName";

interface Props {
    onChange: (value: any) => void;
    name: string;
    value: string;
    text: string;
    style?: string;
    isChecked: boolean;
}

const mainClass = ClassName.Radiobutton;

const RadioButton = ({ onChange, name, value, text, style, isChecked }: Props) => {
    return (
        <label className={classNames(mainClass, style && `${mainClass}--style_${style}`)}>
            <input onChange={() => onChange(value)} className={`${mainClass}__input`} type="radio" name={name} checked={isChecked} />
            <span className={`${mainClass}__style`}>
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className={`${mainClass}__text`}>{text}</span>
        </label>
    );
};

export default RadioButton;