import axios from "axios";
const apiKeys = import.meta.env.VITE_APP_MOVIESDB_API_KEYS;

const movieURL = "https://api.themoviedb.org/3";
const baseURLOfMovieByGenereID = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeys}`;


const getTrendiesVideos = () => {
  const trendingEndpoint = "/trending/all/day";
  const apiUrl = `${movieURL}${trendingEndpoint}?api_key=${apiKeys}`;
  return axios.get(apiUrl);
};
const getMovieBygenreID = (id) => {
  return axios.get(`${baseURLOfMovieByGenereID}&with_genres=${id}`);
};
export default { getTrendiesVideos, getMovieBygenreID };


// Restrict key usage requests to the specified websites