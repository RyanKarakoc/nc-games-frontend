import { fetchReviews, fetchUsers } from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import CommentsModal from "./CommentsModal";

const ReviewList = ({
  reviews,
  setReviews,
  comments,
  setComments,
}) => {
  const [openModel, setOpenModel] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);

  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div>
      <CommentsModal
        openModel={openModel}
        setOpenModel={setOpenModel}
        comments={comments}
        setComments={setComments}
        isModalLoading={isModalLoading}
      />
      <div className="review-list">
        {reviews.map((review) => {
          return (
            <ReviewCard
              openModel={openModel}
              setOpenModel={setOpenModel}
              review={review}
              setComments={setComments}
              setIsModalLoading={setIsModalLoading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;
