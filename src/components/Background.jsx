import React from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Background() {
  return (
    <Div>
      <Box>
        <Title>Todolist</Title>
        <AddTodo />
        <TodoList />
      </Box>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Box = styled.div`
  display: flex;

  align-items: center;
  width: 70vw;
  height: 80vh;
  background: #fff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: "Pretendard";
  font-weight: 600;
  height: 30%;
`;
