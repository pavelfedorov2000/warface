import classNames from "classnames";
import checkIcon from "../assets/images/icons/check.svg";

interface Props {
    onChange: (value: any) => void;
    name: string;
    value: string;
    text: string;
    style?: string;
    isChecked: boolean;
}

const RadioButton = ({ onChange, name, value, text, style, isChecked }: Props) => {
    return (
        <label className={classNames('radiobutton', style && `radiobutton--style_${style}`)}>
            <input onChange={() => onChange(value)} className="radiobutton__input" type="radio" name={name} checked={isChecked} />
            <span className="radiobutton__style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="radiobutton__text">{text}</span>
        </label>
    );
};

export default RadioButton;