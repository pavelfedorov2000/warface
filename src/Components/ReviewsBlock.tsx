import { REVIEWS } from "../constants/reviews";
import { ReviewItem } from "../interfaces/Review";
import Review from "./Review";

const ReviewsBlock = ({ reviews }: { reviews: ReviewItem[]; }) => {
    return (
        <ul className="reviews-block">
            {reviews.map((review) => (
                <li key={review.id}>
                    <Review review={review} />
                </li>
            ))}
        </ul>
    );
};

export default ReviewsBlock;