import { atom } from "recoil";

// 예시: Counter 상태를 위한 Atom 생성
export const counterState = atom({
  key: "counterState", // 고유한 식별자
  default: 0, // 초기값
});
