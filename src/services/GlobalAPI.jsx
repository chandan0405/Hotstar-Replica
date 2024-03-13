import axios from "axios";

const movieURL = "https://api.themoviedb.org/3";
const baseURLOfMovieByGenereID =
  "https://api.themoviedb.org/3/discover/movie?api_key=f5947573f25fd5ef26409154962e9394";
const api_key = "f5947573f25fd5ef26409154962e9394";

const getTrendiesVideos = () => {
  const trendingEndpoint = "/trending/all/day";
  const apiUrl = `${movieURL}${trendingEndpoint}?api_key=${api_key}`;
  return axios.get(apiUrl);
};
const getMovieBygenreID = (id) => {
  return axios.get(`${baseURLOfMovieByGenereID}&with_genres=${id}`);
};
export default { getTrendiesVideos, getMovieBygenreID };


// Restrict key usage requests to the specified websites