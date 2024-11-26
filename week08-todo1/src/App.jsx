import { useState } from "react";
import TodoListPage from "./pages/TodoListPage";

// [개선 방향]
// 로딩, 에러처리
// 디바운싱을 통해 체크박스 클릭 제한
// api 커스텀 훅 만들기
// 스타일
// 버튼의 Disabled 처리
function App() {
  return (
    <>
      <TodoListPage />
    </>
  );
}

export default App;
