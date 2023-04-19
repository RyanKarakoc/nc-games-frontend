import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CommentModal from "./CommentsModal";
import { fetchCommentsByReview } from "../api";

const ReviewCard = ({
  setOpenModel,
  openModel,
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
  setComments,
  setIsModalLoading,
}) => {
  const [reviewCardComments, setReviewcardComments] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = (event) => {
    setOpenModel(true);
    setReviewcardComments(review_id);
  };

  useEffect(() => {
    // console.log("hello");
    setIsModalLoading(true);
    fetchCommentsByReview(review_id).then((response) => {
      setComments(response);
      setIsModalLoading(false);
    });
  }, [reviewCardComments]);

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
      </Link>
      <div className="review-votes-comments">
        <h5 className="review-list-votes">{votes} Votes</h5>
        <h5 onClick={handleOnClick} className="review-list-comments">
          {comment_count} Comments
        </h5>
      </div>
    </div>
  );
};

export default ReviewCard;
