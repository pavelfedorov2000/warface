import classNames from "classnames";
import titleDots from "../assets/images/title-dots.svg";

interface Props {
    className?: string;
    text: string;
}

const Title = ({ className, text }: Props) => {
    return (
        <h2 className={classNames('title', className && className)} style={{ backgroundImage: `url(${titleDots})` }}>{text}</h2>
    );
};

export default Title;