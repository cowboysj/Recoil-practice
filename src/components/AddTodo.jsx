import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil/atoms/todoState";
import styled from "styled-components";

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
    <Div>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <Button onClick={addTodo}>추가</Button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  height: 30%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  width: 150px;
  border-width: 0 0 1px;
  margin-right: 5px;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: black;
  color: white;
  font-family: "Pretendard";
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
