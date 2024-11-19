import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MovieComponent from "../movies/MovieComponent";
import useCustomAxios from "../../hooks/use-custom-axios";
import CardSkeleton from "../movies/skeleton/card-skeleton";

const ContainerUl = styled.ul`
  list-style: none;

  padding: 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;
const Contents = styled.h2`
  margin-top: 12px;
  font-size: 18px;
  color: #ffffff;
`;

export default function SearchMovieList({ query = "" }) {
  // api 연결
  const { movies, loading, error } = useCustomAxios(
    `/search/movie?query=${query}&include_adult=true&language=ko-US&page=1`
  );
  // // query가 바뀌지도 않았는데 글자를 치면 계속 호출되는 문제점

  // 페이지 이동
  const navigate = useNavigate();
  const handleMoveToDetail = (id) => {
    navigate(`/movies/${id}`, {
      replace: false,
    });
  };

  if (loading) {
    return <CardSkeleton number={20} />;
  }
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;
  if (query && movies.data?.results.length === 0) {
    return <Contents style={{ color: "white" }}>'{query}'에 대한 검색결과가 없습니다.</Contents>;
  }

  return (
    <>
      {movies.data?.results.length > 0 && (
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
      )}
    </>
  );
}
