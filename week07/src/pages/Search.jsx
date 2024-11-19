import styled from "styled-components";
import { useState } from "react";
import SearchMovieList from "../components/search/search-movie-list";

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

export default function Search() {
  const [query, setQuery] = useState("");
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputText);
  };

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

      <SearchMovieList query={query} />
    </Container>
  );
}
