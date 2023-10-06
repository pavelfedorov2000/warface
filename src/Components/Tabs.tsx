import classNames from "classnames";
import { Tab as TabType } from "../interfaces/Tab";
import Tab from "./Tab";
import { WithClassName } from "../types/types";

interface Props {
    style?: string;
    items: TabType[];
}

const Tabs = ({ items, className, style }: Props & WithClassName) => {
    return (
        <div className={classNames('tabs', className, style && `tabs--style_${style}`)} role="tablist">
            {items.map((item, index) => (
                <Tab key={index} {...item} />
            ))}
        </div>
    );
};

export default Tabs;