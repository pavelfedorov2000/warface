import { useState } from "react";
import { Button, ReviewsBlock } from "../Components";
import Ellipsis from "../Components/icons/Ellipsis";
import Send from "../Components/icons/Send";
import { PageTop } from "../Components/Layout";
import { REVIEWS } from "../constants/reviews";
import { Page } from "../interfaces/Route";

const Reviews = ({ title }: Page) => {
    const limit = 5;
    const [visibleCount, setVisibleCount] = useState(3);
    const [reviews, setReviews] = useState(REVIEWS.slice(0, 3));
    const [deltaReviews, setDeltaReviews] = useState(limit);
    const [totalReviews, setTotalReviews] = useState(REVIEWS.length);

    const [reviewText, setReviewText] = useState('');
    const [visibleSuccessText, setVisibleSuccessText] = useState(false);

    const loadMoreReviews = () => {
        setReviews([
            ...reviews,
            ...REVIEWS.slice(visibleCount, visibleCount + limit)
        ]);
        setVisibleCount((c) => c + limit);
        setDeltaReviews(REVIEWS.length - visibleCount - limit);
    }

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(event.target.value);
    }

    const handleAddReview = (event: any) => {
        event.preventDefault();

        setReviewText('');
        setVisibleSuccessText(true);
        setTimeout(() => {
            setVisibleSuccessText(false);
        }, 3000);

        const prevId = reviews[reviews.length - 1].id;
        const date = new Date(Date.now());
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const time = date.toLocaleTimeString().split(':').slice(0, 2).join(':');

        setReviews([
            ...reviews,
            {
                id: prevId && prevId + 1,
                name: reviews[0].name,
                date: `${day}.${month < 10 ? `0${month}` : month}.${year}`,
                time: time,
                text: {
                    items: [{
                        text: reviewText
                    }]
                }
            }
        ]);

        setTotalReviews((c) => c + 1);
    }

    return (
        <main className="page__content page__content--w-990">
            <PageTop title={title} text={`Количество отзывов:  ${totalReviews}`} />
            <ReviewsBlock reviews={reviews} />
            {reviews.length < REVIEWS.length &&
                <Button onClick={loadMoreReviews} className="reviews-more" text={`Показать еще ${deltaReviews}`} icon={<Ellipsis />} reversed />
            }
            <section className="leave-review">
                <PageTop title="Оставить отзыв" />
                <form onSubmit={handleAddReview} className="leave-review__form">
                    <div className="textfield">
                        <textarea onChange={handleInput} className="textfield__textarea" placeholder="Напишите свой отзыв" value={reviewText}></textarea>
                        <div className="textfield__btns">
                            <button className="textfield__btn" type="submit">
                                <Send />
                            </button>
                        </div>
                    </div>
                    {visibleSuccessText &&
                        <p className="review-success">
                            Спасибо. Ваш отзыв будет размещен в течение дня.
                        </p>
                    }
                </form>
            </section>
        </main>
    );
};

export default Reviews;