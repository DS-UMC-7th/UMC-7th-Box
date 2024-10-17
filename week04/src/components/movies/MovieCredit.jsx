import styled from "styled-components";
import useCustomAxios from "../../hooks/useCustomAxios";

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const CreditText = styled.h2`
  padding: 20px 20px 24px 20px;

  font-size: 20px;
  font-weight: 900;
  color: #cccccc;
`;
const CreditListContainer = styled.ul`
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CreditItemContainer = styled.li`
  margin: 0 20px 28px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  overflow: hidden;
`;
const NoImg = styled(ImgContainer)`
  background: linear-gradient(0.42turn, #6d4242, #1f3952);
`;
const MovieImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const CastName = styled.p`
  margin: 12px 0 0 0;
  max-width: 112px;

  font-size: 14px;
  font-weight: 900;
  color: #b2b2b2;
  text-align: center;
`;
const CastCharacter = styled.p`
  margin: 2px 0 0 0;
  max-width: 112px;

  font-size: 11px;
  font-weight: 900;
  color: #b2b2b2be;
  text-align: center;
`;

// const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

export default function MovieCredit({ movieId }) {
  const { movies, loading, error } = useCustomAxios(`movie/${movieId}/credits?language=ko-US`);
  console.log("감독/출연", movies);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;

  return (
    <Container>
      <CreditText>감독/출연</CreditText>
      <CreditListContainer>
        {movies.data?.cast.map((cast) => (
          <CreditItemContainer key={cast.id}>
            <ImgContainer>
              {cast.profile_path ? (
                <MovieImg src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="img" />
              ) : (
                <NoImg />
              )}
            </ImgContainer>
            <CastName>{cast.name}</CastName>
            <CastCharacter>{cast.character}</CastCharacter>
          </CreditItemContainer>
        ))}
      </CreditListContainer>
    </Container>
  );
}
