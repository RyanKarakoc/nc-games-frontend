import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-project-v9v9.onrender.com/api",
});

export const fetchReviews = () => {
  return gamesAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const fetchUsers = () => {
  return gamesAPI.get("/users").then((response) => {
    return response.data.users;
  });
};
