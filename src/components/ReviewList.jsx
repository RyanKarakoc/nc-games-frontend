import { fetchReviews, fetchUsers } from "../api";
import { useEffect } from "react";
import IndividualReview from "./IndividualReview";

const ReviewList = ({ reviews, setReviews, users, setUsers }) => {
  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (
          <IndividualReview
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
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
