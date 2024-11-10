import { styled } from "styled-components";

export const TodoContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodoInput = styled.input`
  margin-right: 12px;
  padding: 12px;
  width: 50vw;
`;
export const TodoButton = styled.button`
  width: 100px;
  height: 43px;

  text-align: center;
  font-size: 14px;
  font-weight: 900;
  color: white;

  border: none;
  background-color: dimgray;
  cursor: pointer;
`;
export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  width: calc(50vw + 136px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const TodoItem = styled.li`
  width: calc(50vw + 136px);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoItemText = styled.h4`
  margin: 20px 0;
  width: calc(50vw + 136px - 84px - 84px);
`;

export const TodoItemInput = styled.input`
  box-sizing: border-box;
  margin: 20px 0;
  padding: 4px;
  width: calc(50vw + 136px - 84px - 84px);
`;
export const TodoItemButton = styled.button`
  width: 72px;
  height: 28px;
  margin-left: 12px;
  text-align: center;
  border: none;
  background-color: whitesmoke;
  cursor: pointer;
`;
