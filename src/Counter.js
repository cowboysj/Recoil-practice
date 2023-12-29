import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "./atoms"; // 이전에 생성한 Atom 불러오기

function Counter() {
  const [counter, setCounter] = useRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
