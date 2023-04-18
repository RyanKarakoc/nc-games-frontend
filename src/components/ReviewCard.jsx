import { useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({
  review_id,
  title,
  category,
  designer,
  owner,
  review_body,
  review_img_url,
  created_at,
  votes,
  comment_count,
  setReviewId,
  reviewId,
}) => {
  return (
    <div className="review">
      <Link to={`/review/${review_id}`}>
        <img
          className="review-card-img"
          src={review_img_url}
          alt="image of review"
        />
        <div className="review-info">
          <h3 className="review-header">{title}</h3>
          <h4 className="review-owner">Review by: {owner}</h4>
        </div>
        <div className="review-votes-comments">
          <h5 className="review-list-votes">Votes: {votes}</h5>
          <h5 className="review-list-comments">Comments: {comment_count}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;
