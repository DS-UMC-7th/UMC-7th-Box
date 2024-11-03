// import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieComponent from "../../components/movies/MovieComponent";
import useCustomAxios from "../../hooks/use-custom-axios";
import { useNavigate } from "react-router-dom";

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
  const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

  const navigate = useNavigate();
  const handleMoveToDetail = (id) => {
    navigate(`/movies/${id}`, {
      replace: false,
    });
  };

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;

  return (
    <Container>
      <Contents>{category}</Contents>
      <ContainerUl>
        {movies.data?.results.map((movie) => {
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
