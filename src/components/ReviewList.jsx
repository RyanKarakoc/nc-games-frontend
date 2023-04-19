import { fetchReviews, fetchUsers } from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import CommentsModal from "./CommentsModal";

const ReviewList = ({
  reviews,
  setReviews,
  users,
  setUsers,
  reviewId,
  setReviewId,
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
              review_id={review.review_id}
              title={review.title}
              category={review.category}
              designer={review.designer}
              owner={review.owner}
              review_body={review.review_body}
              review_img_url={review.review_img_url}
              created_at={review.created_at}
              votes={review.votes}
              comment_count={review.comment_count}
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
