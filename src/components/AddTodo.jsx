import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil/atoms/todoState";

export default function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const setTodos = useSetRecoilState(todoState);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
