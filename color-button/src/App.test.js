import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has the correct initial conditions", () => {
  render(<App />);
  // find an element with button role and text of 'Change to blue'
  const element = screen.getByRole("button", { name: "Change to blue" });

  // expected the background color to be red
  expect(element).toHaveStyle({ backgroundColor: "red" });
  expect(element).toHaveStyle({ cursor: "pointer" });
  expect(element).toBeEnabled();

  // click button
  fireEvent.click(element);

  // expected the background color to be blue
  expect(element).toHaveStyle({ backgroundColor: "blue" });
  expect(element.textContent).toBe("Change to red");
});

test("checkbox has the correct initial conditions", () => {
  render(<App />);
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
  expect(checkbox).not.toBeChecked();
});

test("turn button disable when checkbox is checked", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);

  expect(button).not.toBeEnabled();
  expect(button).toHaveStyle({
    cursor: "not-allowed",
    backgroundColor: "gray",
  });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ cursor: "pointer" });
});
