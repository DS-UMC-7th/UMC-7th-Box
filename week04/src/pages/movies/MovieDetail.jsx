import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieInfo from "../../components/movies/MovieInfo";
import MovieCredit from "../../components/movies/MovieCredit";

const Container = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const Contents = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #ffffff;
`;

// const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

export default function MovieDetail() {
  const { movieId } = useParams();
  // const params = useParams();
  // console.log(params);

  return (
    <Container>
      <MovieInfo movieId={movieId} />
      <MovieCredit movieId={movieId} />
    </Container>
  );
}
