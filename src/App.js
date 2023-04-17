import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Header />
      <ReviewList
        reviews={reviews}
        setReviews={setReviews}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
