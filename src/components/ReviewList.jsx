import { fetchReviews, fetchUsers } from "../api";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  setReviews,
  users,
  setUsers,
  reviewId,
  setReviewId,
}) => {
  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (
          <ReviewCard
            review_id={review.review_id}
            title={review.title}
            category={review.category}
            designer={review.designer}
            owner={review.owner}
            review_body={review.review_body}
            review_img_url={review.review_img_url}
            created_at={review.created_at}
            votes={review.votes}
            comment_count={review.comment_count}
            reviewId={reviewId}
            setReviewId={setReviewId}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
