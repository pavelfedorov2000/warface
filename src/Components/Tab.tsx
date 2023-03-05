import classNames from "classnames";
import { Tab as TabType } from "../interfaces/Tab";

const Tab = ({ text, id, selected }: TabType) => {
    return (
        <button className={classNames('tab', {
            'active': selected
        })} role="tab" aria-controls={id} aria-selected={selected} tabIndex={selected ? 0 : -1} type="button">
            {text}
        </button>
    );
};

export default Tab;