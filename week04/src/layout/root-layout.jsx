import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: calc(100vh - 72px);

  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
