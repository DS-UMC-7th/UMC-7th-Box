import { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

export default function TodoList({ moreRendering, handleMoreRender }) {
  const [todoListData, setTodoListData] = useState([]);

  // todo 조회 api
  const api = axios.create({
    baseURL: "http://localhost:3000/todo",
  });

  async function getTodoList() {
    try {
      const response = await api.get("", {
        params: {
          title: "", // 검색 가능
        },
      });
      setTodoListData(response.data[0]);
      console.log("[api 성공] get todo list: ", response.data[0]);
    } catch (error) {
      console.error("[api 실패] get todo list:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getTodoList();
  }, [moreRendering]);

  return (
    <>
      {todoListData.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isChecked={item.checked}
          handleMoreRender={handleMoreRender}
        />
      ))}
    </>
  );
}
