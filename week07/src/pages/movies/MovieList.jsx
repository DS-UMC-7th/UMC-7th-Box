// import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieComponent from "../../components/movies/MovieComponent";
import useCustomAxios from "../../hooks/use-custom-axios";
import { useNavigate } from "react-router-dom";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const Contents = styled.h2`
  margin: 0 0 12px 0;
  font-size: 24px;
  color: #ffffff;
`;
const ContainerUl = styled.ul`
  list-style: none;

  padding: 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export default function MovieList({ path, category }) {
  // const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

  const {
    data: movies,
    isPending,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => useGetMovies({ category: path, pageParam: 1 }),
    queryKey: ["movies", path],
    cacheTime: 10000,
    staleTime: 10000,
  });
  // isPending: 데이터를 불러오는 중입니다.
  // isLoading: 데이터를 불러오는 중이거나, 재시도 중일 때 true가 됩니다.
  // cacheTime, staleTime => 해당 시간동안은 함수 실행x(데이터 페치x)
  // console.log("data: ", movies?.results); //

  const navigate = useNavigate();
  const handleMoveToDetail = (id) => {
    navigate(`/movies/${id}`, {
      replace: false,
    });
  };

  if (isPending) {
    return (
      <Container>
        <Contents>{category}</Contents>
        <p style={{ color: "white" }}>Loading...</p>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <Contents>{category}</Contents>
        <p style={{ color: "white" }}>Error: {error}</p>;
      </Container>
    );
  }

  return (
    <Container>
      <Contents>{category}</Contents>
      <ContainerUl>
        {movies?.results.map((movie) => {
          return (
            <MovieComponent
              handleMoveToDetail={() => handleMoveToDetail(movie.id)}
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </ContainerUl>
    </Container>
  );
}
