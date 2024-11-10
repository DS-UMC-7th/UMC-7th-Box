import * as A from "./TodoList.style";

export default function Button({ text, handleOnClick }) {
  return <A.TodoItemButton onClick={handleOnClick}>{text}</A.TodoItemButton>;
}
