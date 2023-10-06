import { useState } from "react";
import { ReviewItem } from "../interfaces/Review";
import ReviewAnswer from "./ReviewAnswer";
import ReviewCard from "./ReviewCard";
import ReviewContent from "./ReviewContent";

const Review = ({ review }: { review: ReviewItem; }) => {
    const [reviewAnswerVisible, setReviewAnswerVisible] = useState(false);
    const toggleReviewAnswer = () => {
        setReviewAnswerVisible((v) => !v);
    }

    const closeReviewAnswer = () => {
        setReviewAnswerVisible(false);
    }

    return (
        <article className="review">
            <ReviewCard {...review} />
            <ReviewContent isExpanded={reviewAnswerVisible} onToggleAnswer={toggleReviewAnswer} {...review} />
            {review.answer && <ReviewAnswer onClose={closeReviewAnswer} isVisible={reviewAnswerVisible} {...review} />}
        </article>
    );
};

export default Review;