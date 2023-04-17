import axios from "axios";

export const fetchReviews = () => {
  return axios
    .get("https://nc-games-project-v9v9.onrender.com/api/reviews")
    .then((response) => {
      return response.data.reviews
    });
};


export const fetchUsers = () => {
  return axios
  .get("https://nc-games-project-v9v9.onrender.com/api/users")
  .then((response) => {
    return response.data.users
  });
}