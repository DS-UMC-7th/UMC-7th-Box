import { Link } from "react-router-dom";
import styled from "styled-components";
import NowPlayingPng from "../assets/now_playing.png";
import PopularPng from "../assets/popular.png";
import TopRatedPng from "../assets/top_rated.png";
import UpcomingPng from "../assets/upcoming.png";

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
const AllCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
`;
const CategoryItemContainer = styled.div`
  margin: 20px 10px;
  padding: 0;

  min-width: 180px;
  max-width: 400px;
  height: 150px;

  border: none;
  border-radius: 8px;

  overflow: hidden;
`;
const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CategoryContents = styled.p`
  position: relative;
  bottom: 52px;
  left: 0;

  display: inline-block;
  margin: 8px 8px 8px 8px;
  padding: 6px 12px;

  font-size: 18px;
  font-weight: 900;
  color: #ffffff;

  background-color: #1e1e20ca;
  border-radius: 4px;
`;

function CategoryItem({ link, categoryImg, category }) {
  return (
    <CategoryItemContainer>
      <Link to={link}>
        <CategoryImg src={categoryImg} alt="img" />
        <CategoryContents>{category}</CategoryContents>
      </Link>
    </CategoryItemContainer>
  );
}

export default function Movies() {
  return (
    <Container>
      <Contents>카테고리</Contents>

      <AllCategoryContainer>
        <CategoryItem
          category="현재 상영중인"
          categoryImg={NowPlayingPng}
          link="/movies/now-playing"
        />
        <CategoryItem category="인기있는" categoryImg={PopularPng} link="/movies/popular" />
        <CategoryItem
          category="높은 평가를 받은"
          categoryImg={TopRatedPng}
          link="/movies/top-rated"
        />
        <CategoryItem category="개봉 예정중인" categoryImg={UpcomingPng} link="/movies/up-coming" />
      </AllCategoryContainer>
    </Container>
  );
}
