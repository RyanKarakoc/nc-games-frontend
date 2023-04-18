import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { useState } from "react";
import Review from "./components/Review";

function App() {
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState(0);
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/review/:review_id"
          element={
            <Review
              users={users}
              reviews={reviews}
              setReview={setReviews}
              reviewId={reviewId}
              setReviewId={setReviewId}
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <ReviewList
              reviews={reviews}
              setReviews={setReviews}
              users={users}
              setUsers={setUsers}
              reviewId={reviewId}
              setReviewId={setReviewId}
            />
          }
        />
        <Route
          path="/"
          element={
            <ReviewList
              reviews={reviews}
              setReviews={setReviews}
              users={users}
              setUsers={setUsers}
              reviewId={reviewId}
              setReviewId={setReviewId}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
