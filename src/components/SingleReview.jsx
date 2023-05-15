import { useEffect, useState } from "react";
import {
  fetchCommentsByReview,
  fetchReviewsById,
  postNewComment,
} from "../api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentList";
import Votes from "./Votes";
import VoteErrorModal from "./VoteErrorModal";
import CommentsTextArea from "./CommentsTextArea";

const SingleReview = ({
  reviews,
  setReview,
  comments,
  setComments,
  signedInAs,
}) => {
  const [openVotesModel, setOpenVotesModel] = useState(false);
  const [isVotesModalLoading, setIsVotesModalLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [addedVote, setAddedVote] = useState(0);
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState("");
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewsById(review_id).then((response) => {
      setReview(response);
      setIsLoading(false);
    });
  }, [review_id, setReview]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  console.log("review");

  return reviews.map((review) => {
    return (
      <div className="review-page">
        <VoteErrorModal
          error={error}
          openVotesModel={openVotesModel}
          setIsVotesModalLoading={setIsVotesModalLoading}
          isVotesModalLoading={isVotesModalLoading}
          setOpenVotesModel={setOpenVotesModel}
        />
        <h2 className="review-title">{review.title}</h2>
        <p className="review-body">{review.review_body}</p>
        <div className="review-votes-comments-count">
          <Votes
            addedVote={addedVote}
            setAddedVote={setAddedVote}
            review_id={review_id}
            review={review}
            setError={setError}
            setOpenVotesModel={setOpenVotesModel}
          />
          <h3 className="review-comments-count">
            Comments: {review.comment_count || 0}
          </h3>
        </div>
        {
          <CommentsTextArea
            signedInAs={signedInAs}
            commentBody={commentBody}
            setCommentBody={setCommentBody}
            setComments={setComments}
            review_id={review_id}
          />
        }
        <div className="review-comments">
          <CommentsList comments={comments} setComments={setComments} />
        </div>
      </div>
    );
  });
};

export default SingleReview;
