import { ReviewItem } from "../interfaces/Review";
import ReviewAnswer from "./ReviewAnswer";
import ReviewCard from "./ReviewCard";
import ReviewContent from "./ReviewContent";

interface Props {
    review: ReviewItem;
}

const Review = ({ review }: Props) => {
    return (
        <article className="review">
            <ReviewCard {...review} />
            <ReviewContent {...review} />
            <ReviewAnswer {...review} />
        </article>
    );
};

export default Review;