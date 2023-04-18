import { useEffect } from "react";
import { fetchReviewsById } from "../api";

const Review = ({ reviews, setReview, reviewId, setReviewId }) => {
  useEffect(() => {
    fetchReviewsById(reviewId).then((data) => {
      setReview(data);
    });
  }, [reviewId]);

  return reviews.map((review) => {
    return (
      <div className="review-page">
        <h2 className="review-title">{review.title}</h2>
    
        <p className="review-body">{review.review_body}</p>
        <div className="review-votes-comments-count">
          <h3 className="review-votes-count">Votes: {review.votes || 0}</h3>
          <h3 className="review-comments-count">
            Comments: {review.comments || 0}
          </h3>
        </div>
        <form className="comment-form">
          <textarea
            className="comment-area"
            placeholder="Write a comment...(will not work until ticket 8)"
          ></textarea>
        </form>
        <p className="review-comments">
          comments
        </p>
      </div>
    );
  });
};

export default Review;
