import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

it("should render the Button component", () => {
  render(<Button />);

  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button");
});

it("should render the Button component with correct props", () => {
  render(<Button children={"Remove"} />);

  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button");
  expect(button).toHaveTextContent("Remove");
});

it("should call the onClick event properly", () => {
  const handleClickSpy = jest.fn();
  render(<Button onClick={handleClickSpy} />);

  fireEvent.click(screen.getByTestId("button"));
  expect(handleClickSpy).toHaveBeenCalledTimes(1);
});
