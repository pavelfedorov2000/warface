import NewWindow from "./icons/NewWindow";

interface Props {
    text: {
        items: { text: string }[]
    };
}

const ReviewContent = ({ text }: Props) => {
    return (
        <div className="review-content">
            <div className="review-content__text">
                {text.items.map((item, index) => (
                    <p key={index}>{item.text}</p>
                ))}
            </div>
            <div className="review-content__btns">
                <button className="button button--style_link-3">
                    <span className="button__text">Показать ответ</span>
                </button>
                <button className="button button--style_link-2">
                    <span className="button__text">Ответить</span>
                    <NewWindow />
                </button>
            </div>
        </div>
    );
};

export default ReviewContent;