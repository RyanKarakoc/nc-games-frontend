import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { useState } from "react";
import SingleReview from "./components/SingleReview";
import CommentsModal from "./components/CommentsModal";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/review/:review_id"
          element={
            <SingleReview
              users={users}
              reviews={reviews}
              setReview={setReviews}
              comments={comments}
              setComments={setComments}
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
              setComments={setComments}
              comments={comments}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
