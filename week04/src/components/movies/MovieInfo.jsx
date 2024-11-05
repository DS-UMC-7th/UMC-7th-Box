import styled from "styled-components";
import useCustomAxios from "../../hooks/useCustomAxios";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  border-radius: 20px;
  overflow: hidden;
  color: white;
`;
const MovieImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const MovieTitle = styled.h2`
  margin: -120px 0 0 0;
  padding: 20px;
  /* height: 130px; */

  font-size: 34px;
  color: #ffffff;

  position: relative;
  background: linear-gradient(#00000000, #000000 95%);
  z-index: 1;
`;
const MovieInfoSubContainer = styled.div`
  margin: 0;
  padding: 4px 20px;

  display: flex;
  background-color: black;
  position: relative;
  z-index: 1;
`;
const MovieRuntime = styled.p`
  margin-right: 16px;

  font-size: 16px;
  font-weight: 900;
  color: #b2b2b2;
`;
const ShortIntroduction = styled.p`
  margin-top: 44px;
  padding: 8px 20px;
  font-size: 20px;
  font-weight: 900;
  color: #cccccc;
`;
const LongIntroduction = styled.p`
  margin: 0;
  padding: 4px 20px;
  font-size: 16px;
  font-weight: 900;
  color: #b2b2b2;
`;

// const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

export default function MovieInfo({ movieId }) {
  const { movies, loading, error } = useCustomAxios(`/movie/${movieId}?language=ko-US`);
  console.log("영화 정보", movies);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;
  // console.log(`포스터 : https://image.tmdb.org/t/p/w500${movies.data.poster_path}`);

  return (
    <Container>
      <ImgContainer>
        <MovieImg src={`https://image.tmdb.org/t/p/w500${movies.data.backdrop_path}`} alt="img" />
      </ImgContainer>
      <MovieTitle>{movies.data.title}</MovieTitle>

      <MovieInfoSubContainer>
        <MovieRuntime>{movies.data.release_date.substring(0, 4)}</MovieRuntime>
        <MovieRuntime>{movies.data.origin_country[0]}</MovieRuntime>
      </MovieInfoSubContainer>
      <MovieInfoSubContainer>
        <MovieRuntime>런타임 : {movies.data.runtime}분</MovieRuntime>
        <MovieRuntime style={{ marginRight: "8px" }}>장르 :</MovieRuntime>
        {movies.data.genres.map((genre) => (
          <MovieRuntime key={genre.id} style={{ marginRight: "8px" }}>
            {genre.name}
          </MovieRuntime>
        ))}
      </MovieInfoSubContainer>

      <ShortIntroduction>{movies.data.tagline}</ShortIntroduction>
      <LongIntroduction>{movies.data.overview}</LongIntroduction>
    </Container>
  );
}
