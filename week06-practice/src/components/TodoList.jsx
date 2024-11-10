import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import * as A from "./TodoList.style";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
  const {
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
  } = useContext(TodoContext);

  return (
    <A.TodoContainer>
      <A.TodoForm onSubmit={handleSubmit}>
        <A.TodoInput
          placeholder="할 일을 적어주세요"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <A.TodoButton type="submit" onClick={addTodo}>
          할 일 등록
        </A.TodoButton>
      </A.TodoForm>

      <A.TodoList>
        {todos.map(({ id, task }) => (
          <A.TodoItem key={id}>
            {editingId === id ? (
              <>
                <Input task={task} handleOnChange={(e) => setEditText(e.target.value)} />
                <Button text={"수정완료"} handleOnClick={() => updateTodo(editingId, editText)} />
                <Button text={"삭제하기"} handleOnClick={() => deleteTodo(id)} />
              </>
            ) : (
              <>
                <A.TodoItemText>
                  {/* {id}. */}
                  {task}
                </A.TodoItemText>
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
          </A.TodoItem>
        ))}
      </A.TodoList>
    </A.TodoContainer>
  );
}
