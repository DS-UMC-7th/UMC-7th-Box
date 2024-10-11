import { useState } from "react";
import styled from "styled-components";

const MovieItem = styled.li`
  margin: 8px;
  width: 120px;

  cursor: pointer;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 120px;
  height: 180px;

  border-radius: 6px;
  overflow: hidden;
  color: white;
`;
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;

  ${MovieItem}:hover & {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const MovieTitle = styled.p`
  margin: 10px 6px 0 6px;
  font-size: 12px;
  font-weight: 900;
  color: #ffffff;
`;
const MovieDate = styled.p`
  margin: 6px;
  font-size: 10px;
  font-weight: 500;
  color: #a3a3a3;
`;

export default function MovieComponent({ movie }) {
  return (
    <MovieItem>
      <ImgContainer>
        <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
        <Overlay />
      </ImgContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDate>{movie.release_date}</MovieDate>
    </MovieItem>
  );
}
