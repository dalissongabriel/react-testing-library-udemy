import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  test("Tooltip dont be displayed initially", () => {
    render(
      <Tooltip message="Any message">
        <p>Lorem Ipsum</p>
      </Tooltip>
    );

    const nullTooltip = screen.queryByText("Any message");
    expect(nullTooltip).not.toBeInTheDocument();
  });

  test("Tooltip responds on mouseover and mouseout", () => {
    render(
      <Tooltip message="Any message">
        <p>Lorem Ipsum</p>
      </Tooltip>
    );

    const element = screen.getByText("Lorem Ipsum");
    userEvent.hover(element);

    const appearsTooltip = screen.getByText("Any message");
    expect(appearsTooltip).toBeInTheDocument();

    userEvent.unhover(element);
    expect(appearsTooltip).not.toBeInTheDocument();
  });
});
