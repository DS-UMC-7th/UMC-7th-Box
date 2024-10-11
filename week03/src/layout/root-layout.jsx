import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 72px);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
