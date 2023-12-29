import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodos } from "../recoil/selectors/todoSortState";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodos);

  return (
    <div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
