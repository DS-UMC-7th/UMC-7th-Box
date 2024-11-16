import * as A from "./TodoList.style";

export default function Input({ task, handleOnChange }) {
  return <A.TodoItemInput type="text" defaultValue={task} onChange={handleOnChange} />;
}
