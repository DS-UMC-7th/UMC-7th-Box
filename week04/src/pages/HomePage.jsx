import styled from "styled-components";

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

export default function HomePage() {
  return (
    <Container>
      <Contents>홈 페이지입니다.</Contents>
    </Container>
  );
}