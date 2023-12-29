import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodos } from "../recoil/selectors/todoSortState";
import styled from "styled-components";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodos);

  return (
    <div>
      <Div>
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ol>
      </Div>
    </div>
  );
}

const Div = styled.div`
  font-family: "Pretendard";
  display: flex;
  font-size: 20px;
`;
