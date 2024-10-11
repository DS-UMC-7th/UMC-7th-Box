import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";

const BackgroundColor = styled.nav`
  width: 200px;
  height: 100%;

  background-color: #1c1c1c;
  color: white;
`;
const Navigation = styled.div`
  margin: 0 12px 12px 12px;
  padding: 16px 12px;
  height: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavigationText = styled.h2`
  margin-left: 8px;

  font-size: 14px;
  font-weight: 900;
`;

export default function Sidebar() {
  return (
    <BackgroundColor>
      <Link to="/search">
        <Navigation>
          <MdSearch style={{ width: "24", height: "24px" }} />
          <NavigationText>검색</NavigationText>
        </Navigation>
      </Link>
      <Link to="/movies">
        <Navigation>
          <BiSolidCameraMovie style={{ width: "24", height: "24px" }} />
          <NavigationText>영화</NavigationText>
        </Navigation>
      </Link>
    </BackgroundColor>
  );
}
