import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([{ id: 1, task: "투두리스트를 작성해보세요." }]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(0);
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        // id: Math.floor(Math.random() * 100) + 2,
        task: text,
      },
    ]);
    setText("");
  };
  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  // 3. 수정하기
  const updateTodo = (id, editText) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? { ...item, task: editText } : item)));
    setEditingId(0);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        handleSubmit,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
