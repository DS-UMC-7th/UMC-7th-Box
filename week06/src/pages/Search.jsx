import styled from "styled-components";
import MovieComponent from "../components/movies/MovieComponent";
import { useNavigate } from "react-router-dom";
import useCustomAxios from "../hooks/use-custom-axios";
import { useState } from "react";

const Container = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const SearchContainer = styled.form`
  height: 40px;

  display: flex;

  border-radius: 8px;

  overflow: hidden;
`;
const SearchInputBox = styled.input`
  margin: 0;
  padding: 12px;
  width: calc(100% - 80px);

  border: none;
  font-size: 14px;
  /* color: #ffffff; */
`;
const SearchSubmitBtn = styled.button`
  padding: 12px;
  width: 80px;

  border: none;
  background-color: crimson;

  font-size: 14px;
  color: #ffffff;

  cursor: pointer;
`;

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

export default function Search() {
  const [query, setQuery] = useState("");
  const [inputText, setInputText] = useState("");

  // api 연결
  const { movies, loading, error } = useCustomAxios(
    `/search/movie?query=${query}&include_adult=true&language=ko-US&page=1`
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputText);
  };

  // 페이지 이동
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
      <SearchContainer onSubmit={handleSubmit}>
        <SearchInputBox
          placeholder="영화 제목을 입력해주세요."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <SearchSubmitBtn>검색</SearchSubmitBtn>
      </SearchContainer>
      {movies.data?.results.length > 0 ? (
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
      ) : (
        <Contents style={{ color: "white" }}>'{query}'에 대한 검색결과가 없습니다.</Contents>
      )}
    </Container>
  );
}
