import classNames from "classnames";
import { Tab as TabType } from "../interfaces/Tab";
import Tab from "./Tab";
import { WithClassName } from "../types/types";
import { ClassName } from "../enums/ClassName";

interface Props {
    style?: string;
    items: TabType[];
}

const mainClass = ClassName.Tabs;

const Tabs = ({ items, className, style }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, className, {
            [`${mainClass}--style_${style}`]: style
        })} role="tablist">
            {items.map((item, index) => (
                <Tab key={index} {...item} />
            ))}
        </div>
    );
};

export default Tabs;