import { formatDateTime } from "../utils/formatDateTime";
import EditIcon from "./icons/EditIcon";
import RemoveAnswer from "./icons/RemoveAnswer";
import avatar from "../assets/images/user.png";

interface Props {
    name?: string;
    text?: {
        items: { text: string }[]
    };
    date?: string;
    time?: string;
}

const ReviewAnswer = ({ name, text, date, time }: Props) => {
    return (
        <div className="review-answer">
            <img src={avatar} alt="avatar" className="review-answer__avatar" />
            <div className="review-answer__name">{name}</div>
            <div className="review-answer__text">
                {text?.items.map((item, index) => (
                    <p key={index}>{item.text}</p>
                ))}
            </div>
            <time className="review-answer__datetime" dateTime={`${formatDateTime(date)}T${time}`}>
                {date} {time}
            </time>
            <button className="review-answer__action review-answer__action--remove" aria-label="Remove answer">
                <RemoveAnswer />
            </button>
            <button className="review-answer__action review-answer__action--edit" aria-label="Edit answer">
                <EditIcon />
            </button>
        </div>
    );
};

export default ReviewAnswer;