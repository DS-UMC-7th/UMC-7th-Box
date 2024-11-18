import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko-US&page=${pageParam}`);
  console.log("영화 받는중...");

  return data;
};

export { useGetMovies };
