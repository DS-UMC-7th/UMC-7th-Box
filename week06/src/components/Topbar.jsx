import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

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
  const { isLogined, setIsLogined, accessToken } = useContext(UserContext);
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setIsLogined(false);
  };

  function removeDomainFromEmail(email) {
    const atIndex = email.indexOf("@");
    return email.slice(0, atIndex);
  }

  // api 연결
  const api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  async function fetchUserId() {
    try {
      const response = await api.get("user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("회원정보 불러오기 성공:", response.data.email);
      setUserName(removeDomainFromEmail(response.data.email));
    } catch (error) {
      console.error("회원정보 불러오기 실패:", error.response?.data || error.message);
    }
  }
  if (isLogined) {
    fetchUserId();
  }

  return (
    <BackgroundColor>
      <Logo>
        <Link to="/">YONGCHA</Link>
      </Logo>
      <ButtonContainer>
        {isLogined ? (
          <>
            <p>{userName}님 반갑습니다.</p>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/signup">
              <Button color={"crimson"} $hoverColor={"#a51a36"}>
                회원가입
              </Button>
            </Link>
          </>
        )}
      </ButtonContainer>
    </BackgroundColor>
  );
}
