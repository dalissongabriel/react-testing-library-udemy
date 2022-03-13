import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("SummaryForm", () => {
  test("form has the correct initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });

    const submitButton = screen.getByRole("button", {
      name: "Confirm order",
    });

    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  test("submit button to be enabled when user agree terms", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });

    const submitButton = screen.getByRole("button", {
      name: "Confirm order",
    });

    userEvent.click(checkbox);
    expect(submitButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(submitButton).toBeDisabled();
  });

  test("tooltip responds on hover terms and conditions", async () => {
    render(<SummaryForm />);

    // tooltip dont be diplayed initially
    const nullTooltip = screen.queryByText(
      /No ice cream will actually be delivered./i
    );
    expect(nullTooltip).not.toBeInTheDocument();

    // tooltip appears upon mouseover of checkbox label
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    userEvent.hover(checkbox);
    const appearsTooltip = screen.getByText(
      /No ice cream will actually be delivered./i
    );
    expect(appearsTooltip).toBeInTheDocument();

    // tooltip disappears upon mouseout of checkbox label
    userEvent.unhover(checkbox);
    expect(appearsTooltip).not.toBeInTheDocument();
  });
});
