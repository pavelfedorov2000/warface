import classNames from "classnames";
import { WithClassName } from "../types/types";

const Tag = ({ tag, className }: { tag: string; } & WithClassName) => {
    return (
        <a key={tag.toString()} href="#" className={classNames('tag', className && `${className}__tag`)}>#{tag}</a>
    );
};

export default Tag;