import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/?",
});

// creating a get req function

export const getMovie = () => {
  return api.get("i=tt3896198&apikey=639cd393&s=titanic&page=1");
};