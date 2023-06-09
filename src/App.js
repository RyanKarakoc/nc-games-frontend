import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { useState } from "react";
import SingleReview from "./components/SingleReview";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [signedInAs, setSignedInAs] = useState({});

  return (
    <div className="App">
      <Header
        users={users}
        setUsers={setUsers}
        signedInAs={signedInAs}
        setSignedInAs={setSignedInAs}
      />
      <Routes>
        <Route
          path="/review/:review_id"
          element={
            <SingleReview
              signedInAs={signedInAs}
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
              openModel={openModel}
              setOpenModel={setOpenModel}
              isModalLoading={isModalLoading}
              setIsModalLoading={setIsModalLoading}
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
              openModel={openModel}
              setOpenModel={setOpenModel}
              isModalLoading={isModalLoading}
              setIsModalLoading={setIsModalLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
