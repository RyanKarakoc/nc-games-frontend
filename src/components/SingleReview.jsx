import { useEffect, useState } from "react";
import { fetchReviewsById } from "../api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentList";

const SingleReview = ({ reviews, setReview, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewsById(review_id).then((data) => {
      setReview(data);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return reviews.map((review) => {
    return (
      <div className="review-page">
        <h2 className="review-title">{review.title}</h2>

        <p className="review-body">{review.review_body}</p>
        <div className="review-votes-comments-count">
          <h3 className="review-votes-count">Votes: {review.votes || 0}</h3>
          <h3 className="review-comments-count">
            Comments: {review.comment_count || 0}
          </h3>
        </div>
        <form className="comment-form">
          <textarea
            className="comment-area"
            placeholder="Write a comment...(will not work until ticket 8)"
          ></textarea>
        </form>
        <div className="review-comments">
          <CommentsList comments={comments} setComments={setComments} />
        </div>
      </div>
    );
  });
};

export default SingleReview;
