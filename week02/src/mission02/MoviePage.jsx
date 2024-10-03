import { useState } from "react";
import { MOVIES } from "./movies";

function MovieComponent({ extraPath }) {
  const [isMouseOn, SetIsMouseOn] = useState(false);
  const handleMouseTrue = () => {
    SetIsMouseOn(true);
    console.log(isMouseOn);
  };
  const handleMouseFalse = () => {
    SetIsMouseOn(false);
    console.log(isMouseOn);
  };

  return (
    <li
      style={{
        margin: "6px",
        width: "72px",
        height: "108px",

        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "72px",
          boxSizing: "border-box",
        }}
        src={`https://image.tmdb.org/t/p/w500${extraPath}`}
        alt="poster"
      />
      <div
        style={{
          // 이부분 개선 필요
          position: "relative",
          top: "-112px",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: isMouseOn ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={handleMouseTrue}
        onMouseLeave={handleMouseFalse}
      ></div>
    </li>
  );
}
export default function MoviePage() {
  return (
    <>
      <ul
        style={{
          width: "100%",
          listStyle: "none",
          padding: "0",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {MOVIES.results.map((postar) => {
          return <MovieComponent key={postar.id} extraPath={postar.poster_path} />;
        })}
      </ul>
    </>
  );
}
