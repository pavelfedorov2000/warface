import santchezz from "../assets/images/santchezz.png";

interface Props {
    img: string;
}

const ToolbarCard = ({ img }: Props) => {
    return (
        <a className="toolbar-card" href="#">
            <img className="toolbar-card__img" src={img} alt="img" />
            <img className="toolbar-card__avatar" src={santchezz} alt="avatar" />
            <span className="toolbar-card__name">
                <span>Santchezz</span>
            </span>
        </a>
    );
};

export default ToolbarCard;