import { useEffect, useState } from "react";
import axios from "axios";

export default function NewTodoForm({ newTodo, setNewTodo, handleMoreRender }) {
  const [isFirstRendering, setIsFirstRendering] = useState(true);
  const [inputTextTitle, setInputTextTitle] = useState("");
  const [inputTextContent, setInputTextContent] = useState("");

  // todo 생성 api
  const api = axios.create({
    baseURL: "http://localhost:3000/todo",
  });

  async function postNewTodo(newTodo) {
    try {
      const response = await api.post("", {
        title: newTodo.title,
        content: newTodo.content,
      });

      console.log("[api 성공] post new todo: ", response);
    } catch (error) {
      console.error("[api 실패] post new todo:", error.response?.data || error.message);
    }
    handleMoreRender();
  }

  // todo 생성 버튼
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo({ title: inputTextTitle, content: inputTextContent });
    setInputTextTitle("");
    setInputTextContent("");
  };
  useEffect(() => {
    if (!isFirstRendering) {
      postNewTodo(newTodo);
    }
    setIsFirstRendering(false);
  }, [newTodo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputTextTitle(e.target.value)}
          value={inputTextTitle}
          type="text"
          placeholder="제목을 입력해주세요"
        />
        <input
          onChange={(e) => setInputTextContent(e.target.value)}
          value={inputTextContent}
          type="text"
          placeholder="내용을 입력해주세요"
        />
        <button type="submit">ToDo 생성</button>
      </form>
    </>
  );
}
