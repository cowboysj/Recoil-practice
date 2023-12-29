import React from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Background() {
  return (
    <Div>
      <Box>
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
`;

const Box = styled.div`
  display: flex;
  width: 70vw;
  height: 80vh;
  background-color: pink;
  background: #fff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
