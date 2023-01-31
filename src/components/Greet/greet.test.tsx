// import { render, screen } from "@testing-library/react";
// import { Greet } from "./greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  // skip, only 가능
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders a name", () => {
      render(<Greet name={"Vishwas"} />);
      const textElement = screen.getByText("Hello Vishwas");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Outside", () => {
  test("renders a name", () => {
    // test can be replaced with it fix xit
    render(<Greet name={"Vishwas"} />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test("Greet renders with a name", () => {
//   render(<Greet name={"Vishwas"} />);
//   const textElement = screen.getByText("Hello Vishwas");
//   expect(textElement).toBeInTheDocument();
// });

// test.only("Greet renders with a name", () => {         only run this test
//   render(<Greet name={"Vishwas"} />);
//   const textElement = screen.getByText("Hello Vishwas");
//   expect(textElement).toBeInTheDocument();
// });

// test.skip("Greet renders with a name", () => {         skip this test
//   render(<Greet name={"Vishwas"} />);
//   const textElement = screen.getByText("Hello Vishwas");
//   expect(textElement).toBeInTheDocument();
// });
