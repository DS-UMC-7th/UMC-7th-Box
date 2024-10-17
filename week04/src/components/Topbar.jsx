import { Link } from "react-router-dom";
import styled from "styled-components";

const BackgroundColor = styled.nav`
  padding: 24px;
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #1c1c1c;
  color: white;
`;
const Logo = styled.h1`
  font-size: 20px;
  font-weight: 900;
  color: crimson;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Button = styled.button`
  margin-left: 16px;
  padding: 8px 14px;

  font-size: 12px;
  font-weight: 900;
  color: white;

  background-color: ${(props) => props.color || "transparent"};
  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hoverColor || "#303030"};
  }
`;

export default function Topbar() {
  return (
    <BackgroundColor>
      <Logo>
        <Link to="/">YONGCHA</Link>
      </Logo>
      <ButtonContainer>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button color={"crimson"} $hoverColor={"#a51a36"}>
            회원가입
          </Button>
        </Link>
      </ButtonContainer>
    </BackgroundColor>
  );
}
