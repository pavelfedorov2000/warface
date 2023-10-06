import classNames from "classnames";
import titleDots from "../assets/images/title-dots.svg";
import { WithClassName } from "../types/types";

interface Props {
    text: string;
    lineColor?: string;
}

const Title = ({ className, text, lineColor }: Props & WithClassName) => {
    return (
        <h2 className={classNames('title', className && className, lineColor && `title--line_${lineColor}`)} style={{ backgroundImage: `url(${titleDots})` }}>{text}</h2>
    );
};

export default Title;