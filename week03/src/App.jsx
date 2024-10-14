// import React from "react";
// import "react-dom";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Outlet
import RootLayout from "./layout/root-layout";
import MoviesLayout from "./layout/MoviesLayout";

// 예외 처리
import NotFound from "./pages/not-found";
// 페이지
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import MovieList from "./pages/MovieList";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // path: '/'를 의미한다.
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movies", // 부모의 path에 '/'가 있기 때문에, '/'를 붙이지 않아도 '/movies'와 동일하게 동작한다.
        element: <MoviesLayout />,
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: "now-playing",
            element: <MovieList path={"now_playing"} category="현재 상영중인 영화" />,
          },
          {
            path: "popular",
            element: <MovieList path={"popular"} category="인기있는 영화" />,
          },
          {
            path: "top-rated",
            element: <MovieList path={"top_rated"} category="높은 평가를 받은 영화" />,
          },
          {
            path: "up-coming",
            element: <MovieList path={"upcoming"} category="개봉 예정중인 영화" />,
          },
        ],
      },
      {
        path: "movie-detail",
        element: <MoviesLayout />,
        children: [
          {
            index: true,
            element: <NotFound />,
          },
          {
            path: ":movieId",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

function App() {
  return (
    <BackgroundColor>
      <RouterProvider router={browserRouter} />
    </BackgroundColor>
  );
}
export default App;
