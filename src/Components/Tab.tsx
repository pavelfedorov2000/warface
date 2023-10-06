import classNames from "classnames";
import { Tab as TabType } from "../interfaces/Tab";
import { ClassName } from "../enums/ClassName";
import { ButtonType } from "../enums/ButtonType";

const Tab = ({ text, id, selected }: TabType) => {
    return (
        <button className={classNames('tab', {
            [ClassName.Active]: selected
        })} role="tab" aria-controls={id} aria-selected={selected} tabIndex={selected ? 0 : -1} type={ButtonType.Button}>
            {text}
        </button>
    );
};

export default Tab;