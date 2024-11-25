import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useGetInfiniteMovies({ category }) {
  //   console.log("category: ", category);

  return useInfiniteQuery({
    queryFn: ({ pageParam }) => useGetMovies({ category, pageParam }),
    queryKey: ["movies", category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log("무한스크롤: ", lastPage, allPages);
    },
  });
}

export { useGetInfiniteMovies };
