import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, // Vite
    // Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`, // npx
    // accept: `application/json`,
    // axios를 사용하면, application/json이 자동으로 요청 헤더에 들어가기 떄문에 따로 선언을 하지 않아도 된다.
  },
  baseURL: "https://api.themoviedb.org/3",
  // baseURL: `${process.env.REACT_APP_MOVIE_API_URL}`, // npx
});

export { axiosInstance };
