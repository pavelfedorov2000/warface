import classNames from "classnames";
import { Tab as TabType } from "../interfaces/Tab";
import Tab from "./Tab";

interface Props {
    className?: string;
    style?: string;
    items: TabType[];
}

const Tabs = ({ items, className, style }: Props) => {
    return (
        <div className={classNames('tabs', className, style && `tabs--style_${style}`)} role="tablist">
            {items.map((item, index) => (
                <Tab key={index} {...item} />
            ))}
        </div>
    );
};

export default Tabs;