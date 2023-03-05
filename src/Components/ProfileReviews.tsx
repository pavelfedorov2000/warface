import { PROFILE_REVIEWS } from "../constants/profile-reviews";
import Review from "./Review";

const ProfileReviews = () => {
    return (
        <section className="profile-reviews">
            {PROFILE_REVIEWS.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </section>
    );
};

export default ProfileReviews;