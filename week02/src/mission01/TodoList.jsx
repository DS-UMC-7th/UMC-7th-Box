import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./todoList_style.css";

export default function TodoList() {
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
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="할 일을 적어주세요"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          할 일 등록
        </button>
      </form>

      <ul className="todo-list">
        {todos.map(({ id, task }, _) => (
          <li className="todo-item" key={id}>
            {editingId === id ? (
              <>
                <Input task={task} handleOnChange={(e) => setEditText(e.target.value)} />
                <Button text={"수정완료"} handleOnClick={() => updateTodo(editingId, editText)} />
                <Button text={"삭제하기"} handleOnClick={() => deleteTodo(id)} />
              </>
            ) : (
              <>
                <h4>
                  {/* {id}. */}
                  {task}
                </h4>
                <Button
                  text={"수정하기"}
                  handleOnClick={() => {
                    setEditingId(id);
                    setEditText(task);
                  }}
                />
                <Button text={"삭제하기"} handleOnClick={() => deleteTodo(id)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
