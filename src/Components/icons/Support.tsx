import classNames from "classnames";
import Headphones from "./Headphones";

interface Props {
    size?: string;
    count?: number;
}

const Support = ({ size, count }: Props) => {
    return (
        <span className={classNames('support-icon', size && `support-icon--size_${size}`)}>
            <Headphones />
            {count && <span>+{count}</span>}
        </span>
    );
};

export default Support;