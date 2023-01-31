import { Greet } from "./greet";
import { screen, render } from "@testing-library/react";
describe("Outside", () => {
  test("renders a name", () => {
    render(<Greet name={"Vishwas"} />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
