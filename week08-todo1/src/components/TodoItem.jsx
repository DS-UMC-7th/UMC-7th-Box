import { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const TodoForm = styled.form`
  display: flex;
`;

export default function TodoItem({ id, title, content, isChecked, handleMoreRender }) {
  const [isPatching, setIsPatching] = useState(false);
  const [todoData, setTodoData] = useState({
    title: title,
    content: content,
    checked: isChecked,
  });

  // todo 수정/삭제 api
  const api = axios.create({
    baseURL: "http://localhost:3000/todo",
  });
  async function deleteTodoItem() {
    try {
      const response = await api.delete(`/${id}`);

      console.log("[api 성공] delete todo item: ", response);
    } catch (error) {
      console.error("[api 실패] delete todo item:", error.response?.data || error.message);
    }
  }
  async function patchTodoItem() {
    try {
      const response = await api.patch(`/${id}`, todoData);

      console.log("[api 성공] patch todo item: ", response);
    } catch (error) {
      console.error("[api 실패] patch todo item:", error.response?.data || error.message);
    }
  }

  // todo 수정/삭제 버튼
  const handleDeleteBtn = async () => {
    await deleteTodoItem();
    handleMoreRender();
  };
  const handleOnPatchBtn = () => {
    setIsPatching(true);
  };
  const handleOffPatchBtn = async () => {
    patchTodoItem();
    await handleMoreRender();
    setIsPatching(false);
  };

  return (
    <>
      <TodoForm onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setTodoData((prev) => ({ ...prev, checked: e.target.checked }))}
          checked={todoData.checked || false}
          type="checkbox"
        />
        {isPatching ? (
          <>
            <div>
              <input
                onChange={(e) => setTodoData((prev) => ({ ...prev, title: e.target.value }))}
                value={todoData.title || ""}
                type="text"
                placeholder={title}
              />
              <input
                onChange={(e) => setTodoData((prev) => ({ ...prev, content: e.target.value }))}
                value={todoData.content || ""}
                type="text"
                placeholder={content}
              />
            </div>
            <button onClick={handleOffPatchBtn}>수정완료</button>
          </>
        ) : (
          <>
            <div>
              <p>{title}</p>
              <p>{content}</p>
            </div>
            <button onClick={handleOnPatchBtn}>수정</button>
            <button onClick={handleDeleteBtn}>삭제</button>
          </>
        )}
      </TodoForm>
    </>
  );
}
