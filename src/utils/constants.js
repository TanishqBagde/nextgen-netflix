import axios from 'axios';
export const API_END_POINT = "https://main--appletv-server.netlify.app/api/v1/user";

axios.post(API_END_POINT, {
  // your request body here
}, {
  withCredentials: true // Include credentials in the request
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjU5N2JkOTM1ZjY5ZGE1ZjcyMWQxOGE4MjhkMGUzYSIsInN1YiI6IjY2NTA2ZDk1NWVhZTc5ZjRmYTg1Y2E4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Ulih1tECOV6s637ib0ZODCo4rowfhOBIFs5gK-EW4'
    }
  };

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies ="https://api.themoviedb.org/3/movie/popular";
export const Top_Rated ="https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming ="https://api.themoviedb.org/3/movie/upcoming";

export const Banner_URL = "https://image.tmdb.org/t/p/w500";

export const SearchMulti = "https://api.themoviedb.org/3/search/multi?query=";