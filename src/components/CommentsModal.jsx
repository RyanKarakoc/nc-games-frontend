import CommentsList from "./CommentList";

const CommentsModal = ({
  openModel,
  setOpenModel,
  comments,
  setComments,
  isModalLoading,
}) => {
  if (!openModel) {
    return null;
  }

  const handleOnClick = () => {
    setOpenModel(false);
  };

  if (isModalLoading) {
    return (
      <div className="modal-overlay">
        <div className="comments-modal">
          <p>Loading...</p>
          <div>
            <p className="model-X" onClick={handleOnClick}>
              X
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={handleOnClick}>
      <div
        className="comments-modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <CommentsList comments={comments} setComments={setComments} />
        <div>
          <p className="model-X" onClick={handleOnClick}>
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
