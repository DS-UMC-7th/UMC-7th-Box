import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movies/MovieComponent";

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
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/${path}?language=ko-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzkyZjA0NGM3M2M3OWNiYmE4MTkzMjQ4NTk2MzhlOSIsIm5iZiI6MTcyODUyNzMwMS42Mjg0NDYsInN1YiI6IjY2ZmY5YmM5NmZjNzRlNTc1NmY3ZjhjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDeJekTip7ZE9Axp5Vuf1JRz8llkhkBlr2dioyKLgbU`,
            // accept: `application/json`,
            // axios를 사용하면, application/json이 자동으로 요청 헤더에 들어가기 떄문에 따로 선언을 하지 않아도 된다.
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);
  console.log(movies);

  return (
    <Container>
      <Contents>{category}</Contents>
      <ContainerUl>
        {movies.data?.results.map((movie) => {
          return <MovieComponent key={movie.id} movie={movie} />;
          // extraPath={postar.poster_path}
        })}
      </ContainerUl>
    </Container>
  );
}
