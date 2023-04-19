import { useEffect, useState } from "react";
import { fetchCommentsByReview } from "../api";
import { useParams } from "react-router-dom";

const CommentsList = ({ comments, setComments }) => {
  const { review_id } = useParams();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCommentsByReview(review_id).then((response) => {
      setComments(response);
    });
  }, []);

  const commentsPerPage = 4;
  const commentsAllowedOnPage = comments.slice(0, 3);

  const handleMoreComments = (event) => {
    event.preventDefault();
    setShowAll(true);
  };

  if (comments.length === 0) {
    return (
      <p className="no-comments">
        No comments...<br></br>Be the first to leave a comment!
      </p>
    );
  }

  if (comments.length > commentsPerPage) {
    if (showAll) {
      return (
        <div>
          {comments.map((comment) => {
            return (
              <div className="review-comment">
                <div className="comment-bar">
                  <p id="comment-bar">{comment.author}</p>
                  <p id="comment-bar">| {comment.votes} Votes |</p>
                  <p id="comment-bar">
                    {new Date(comment.created_at).toDateString()}
                  </p>
                </div>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {commentsAllowedOnPage.map((comment) => {
            return (
              <div className="review-comment">
                <div className="comment-bar">
                  <p id="comment-bar">{comment.author}</p>
                  <p id="comment-bar">| {comment.votes} Votes |</p>
                  <p id="comment-bar">
                    {new Date(comment.created_at).toDateString()}
                  </p>
                </div>
                <p>{comment.body}</p>
              </div>
            );
          })}
          <button className="more-comments" onClick={handleMoreComments}>
            Load more comments
          </button>
        </div>
      );
    }
  } else {
    return (
      <div>
        {comments.map((comment) => {
          return (
            <div className="review-comment">
              <div className="comment-bar">
                <p id="comment-bar">{comment.author}</p>
                <p id="comment-bar">| {comment.votes} Votes |</p>
                <p id="comment-bar">
                  {new Date(comment.created_at).toDateString()}
                </p>
              </div>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CommentsList;
