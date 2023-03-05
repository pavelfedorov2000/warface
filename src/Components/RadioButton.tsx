import classNames from "classnames";
import checkIcon from "../assets/images/icons/check.svg";

interface Props {
    name: string;
    text: string;
    style?: string;
}

const RadioButton = ({ name, text, style }: Props) => {
    return (
        <label className={classNames('radiobutton', style && `radiobutton--style_${style}`)}>
            <input className="radiobutton__input" type="radio" name={name} checked />
            <span className="radiobutton__style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="radiobutton__text">{text}</span>
        </label>
    );
};

export default RadioButton;