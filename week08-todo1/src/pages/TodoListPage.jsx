import { useEffect, useState } from "react";
import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const [newTodo, setNewTodo] = useState({});
  const [moreRendering, setMoreRendering] = useState(false);
  const handleMoreRender = () => setMoreRendering(!moreRendering);

  return (
    <>
      <h3>! UMC ToDoList !</h3>
      <NewTodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleMoreRender={handleMoreRender} />
      <TodoList moreRendering={moreRendering} handleMoreRender={handleMoreRender} />
    </>
  );
}
