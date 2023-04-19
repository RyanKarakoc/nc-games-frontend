import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CommentModal from "./CommentsModal";
import { fetchCommentsByReview } from "../api";

const ReviewCard = ({
  setOpenModel,
  review,
  setComments,
  setIsModalLoading,
}) => {
  const [reviewCardComments, setReviewcardComments] = useState(0);

  const handleOnClick = (event) => {
    setOpenModel(true);
    setReviewcardComments(review.review_id);
  };

  useEffect(() => {
    setIsModalLoading(true);
    fetchCommentsByReview(review.review_id).then((response) => {
      setComments(response);
      setIsModalLoading(false);
    });
  }, [reviewCardComments]);

  return (
    <div className="review">
      <Link to={`/review/${review.review_id}`}>
        <img
          className="review-card-img"
          src={review.review_img_url}
          alt="image of review"
        />
        <div className="review-info">
          <h3 className="review-header">{review.title}</h3>
          <h4 className="review-owner">Review by: {review.owner}</h4>
        </div>
      </Link>
      <div className="review-votes-comments">
        <h5 className="review-list-votes">{review.votes} Votes</h5>
        <h5 onClick={handleOnClick} className="review-list-comments">
          {review.comment_count} Comments
        </h5>
      </div>
    </div>
  );
};

export default ReviewCard;
