import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

// 사용 방식
// const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);
// console.log("hook: ", movies);

const useCustomAxios = (url) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setMovies(response);
      } catch (error) {
        // console.error("오류 발생:", error);
        setError(error.message);
      } finally {
        setLoading(false);
        // console.log("MOVIE_API_URL:", process.env.REACT_APP_MOVIE_API_URL);
        // console.log("env:", process.env);
        // console.log("토큰:", process.env.REACT_APP_TMDB_TOKEN);
      }
    };
    getMovies();
  }, [url]);
  // console.log("hook: ", movies);

  return { movies, loading, error };
};

export default useCustomAxios;
