import { useEffect } from "react";
import { patchReviewVotes } from "../api";

const Votes = ({
  addedVote,
  setAddedVote,
  review_id,
  review,
  setError,
  setOpenVotesModel,
}) => {
  const handleUpvote = (event) => {
    patchReviewVotes(review_id, addedVote).catch(() => {
      setError("Oops! Something went wrong!");
      setAddedVote((currentVote) => {
        return (currentVote -= 1);
      });
      setOpenVotesModel(true);
    });
    setAddedVote((currentVote) => {
      return (currentVote += 1);
    });
  };

  const handleDownvote = (event) => {
    patchReviewVotes(review_id, addedVote).catch(() => {
      setError("Oops! Something went wrong!");
      setAddedVote((currentVote) => {
        return (currentVote += 1);
      });
      setOpenVotesModel(true);
    });
    setAddedVote((currentvote) => {
      return (currentvote -= 1);
    });
  };

  let upvoteButtonStatus = "";

  if (addedVote >= 1) upvoteButtonStatus = "upvoteStatus";
  if (addedVote === 0) upvoteButtonStatus = "neutralStatus";
  if (addedVote <= -1) upvoteButtonStatus = "neutralStatus";

  let downvoteButtonStatus = "";

  if (addedVote >= 1) downvoteButtonStatus = "neutralStatus";
  if (addedVote === 0) downvoteButtonStatus = "neutralStatus";
  if (addedVote <= -1) downvoteButtonStatus = "downvoteStatus";

  return (
    <>
      <button
        id={`${upvoteButtonStatus}`}
        onClick={handleUpvote}
        disabled={addedVote >= 1}
      >
        <img
          className="upvote-button"
          alt="upvote-button"
          src="https://cdn-icons-png.flaticon.com/512/3148/3148312.png"
        />
      </button>

      <h3 className="review-votes-count">
        {review.votes + addedVote || 0} Votes
      </h3>
      <button
        id={`${downvoteButtonStatus}`}
        onClick={handleDownvote}
        disabled={addedVote <= -1}
      >
        <img
          className="downvote-button"
          alt="downvote-button"
          src="https://cdn-icons-png.flaticon.com/512/3148/3148295.png"
        />
      </button>
    </>
  );
};

export default Votes;
