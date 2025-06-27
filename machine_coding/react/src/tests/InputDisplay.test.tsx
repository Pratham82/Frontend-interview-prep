import { render, screen, fireEvent } from "@testing-library/react";
import InputDisplay from "../components/InputDisplay";

test("displays input value correctly", () => {
  render(<InputDisplay />);

  const input = screen.getByTestId("input");
  const output = screen.getByTestId("output");

  // Type into the input
  fireEvent.change(input, { target: { value: "hello world" } });

  // Assert that the displayed text matches input
  expect(output.textContent).toBe("hello world");
});
