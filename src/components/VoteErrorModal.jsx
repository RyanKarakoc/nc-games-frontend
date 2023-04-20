const VoteErrorModal = ({ openVotesModel, setOpenVotesModel, error }) => {
  if (!openVotesModel) {
    return null;
  }

  const handleOnClick = () => {
    setOpenVotesModel(false);
  };

  if (openVotesModel) {
    return (
      <div className="modal-overlay" onClick={handleOnClick}>
        <div
          className="votes-error-modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <p>{error}</p>
          <div>
            <p className="model-X" onClick={handleOnClick}>
              X
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default VoteErrorModal;
