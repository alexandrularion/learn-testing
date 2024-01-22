import { render, screen } from "@testing-library/react";
import Add from "./Add";

it("should render the Add component and display content", () => {
  render(<Add />);

  const section = screen.getByTestId("section");
  const input = screen.getByTestId("input");
  const button = screen.getByTestId("button");

  // Section
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass("section");
  expect(section).toContainElement(input);
  expect(section).toContainElement(button);

  // Input
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("value");
  expect(input).toHaveAttribute("class");
  expect(input).toHaveAttribute("placeholder");

  // Button
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button");
  expect(button).toHaveAttribute("class");
  expect(button).toHaveTextContent("Save");
});
