import { Review } from "../interfaces/Review";
import NewWindow from "./icons/NewWindow";

interface Props {
    text?: {
        items: { text: string }[]
    };
    answer?: Review;
    isExpanded: boolean;
    onToggleAnswer: () => void;
}

const mainClass = 'review-content';

const ReviewContent = ({ text, answer, isExpanded, onToggleAnswer }: Props) => {
    return (
        <div className={mainClass}>
            {text && text.items.length !== 0 ?
                <>
                    <div className={`${mainClass}__text`}>
                        {text?.items.map((item, index) => (
                            <p key={index}>{item.text}</p>
                        ))}
                    </div>
                    {
                        answer &&
                        <div className={`${mainClass}__btns`}>
                            <button onClick={onToggleAnswer} className="button button--style_link-3" aria-expanded={isExpanded}>
                                <span className="button__text">Показать ответ</span>
                            </button>
                            <button className="button button--style_link-2">
                                <span className="button__text">Ответить</span>
                                <NewWindow />
                            </button>
                        </div>
                    }
                </>
                : <p>{`Отзыв без коментария :(`}</p>
            }
        </div>
    );
};

export default ReviewContent;