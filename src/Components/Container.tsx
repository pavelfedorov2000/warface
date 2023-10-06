import classNames from "classnames";
import { WithChildren, WithClassName } from "../types/types";
import { ClassName } from "../enums/ClassName";

const Container = ({ className, children }: WithClassName & WithChildren) => {
    return (
        <div className={classNames(ClassName.Container, className)}>
            {children}
        </div>
    );
};

export default Container;