import { todoState } from "../atoms/todoState";
import { selector } from "recoil";

export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos;
  },
});
