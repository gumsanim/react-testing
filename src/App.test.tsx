import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test(name, fn, timeout) 테스트 함수 구조
test("renders learn react link", () => {
  render(<App />); // App 컴포넌트를 렌더링하고
  // const linkElement = screen.getByText(/learn react/i); // 화면에 텍스트가 나오는지 검사
  // expect(linkElement).toBeInTheDocument(); // document에 해당 텍스트가 존재하는지
});
