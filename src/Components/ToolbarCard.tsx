import santchezz from "../assets/images/santchezz.png";
import Image from "./Image";

const mainClass = 'toolbar-card';

const ToolbarCard = ({ img }: { img: string; }) => {
    return (
        <a className={mainClass} href="#">
            <Image className={`${mainClass}__img`} src={img} width={100} height={100} />
            <Image className={`${mainClass}__avatar`} src={santchezz} alt="avatar" width={45} height={45} />
            <span className={`${mainClass}__name`}>
                <span>Santchezz</span>
            </span>
        </a>
    );
};

export default ToolbarCard;