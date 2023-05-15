import { postNewComment, fetchCommentsByReview } from "../api";

const CommentsTextArea = ({
  signedInAs,
  commentBody,
  setCommentBody,
  setComments,
  review_id,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: signedInAs[0].username,
      body: commentBody,
    };

    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });

    postNewComment(review_id, newComment)
      .then((newComment) => {
        return fetchCommentsByReview(review_id);
      })
      .then((allComments) => {
        setComments(allComments);
      });

    setCommentBody("");
  };

  console.log(signedInAs);

  return signedInAs.length > 0 ? (
    <form onSubmit={handleOnSubmit} className="comment-form">
      <textarea
        value={commentBody}
        onChange={(event) => {
          setCommentBody(event.target.value);
        }}
        className="comment-area"
        placeholder="Write a comment..."
      ></textarea>
      <div className="comment-submit-bar">
        <button>Submit</button>
      </div>
    </form>
  ) : (
    <form onSubmit={handleOnSubmit} className="comment-form">
      <textarea
        value={commentBody}
        onChange={(event) => {
          setCommentBody(event.target.value);
        }}
        className="comment-area"
        placeholder="Please sign in..."
        disabled
      ></textarea>
      <div className="comment-submit-bar">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default CommentsTextArea;
