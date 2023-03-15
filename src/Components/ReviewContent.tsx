import { Review } from "../interfaces/Review";
import NewWindow from "./icons/NewWindow";

interface Props {
    text?: {
        items: { text: string }[]
    };
    answer?: Review;
}

const ReviewContent = ({ text, answer }: Props) => {
    return (
        <div className="review-content">
            {text && text.items.length !== 0 ?
                <>
                    <div className="review-content__text">
                        {text?.items.map((item, index) => (
                            <p key={index}>{item.text}</p>
                        ))}
                    </div>
                    {
                        answer &&
                        <div className="review-content__btns">
                            <button className="button button--style_link-3">
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