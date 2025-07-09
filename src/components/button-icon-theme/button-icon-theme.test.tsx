import { render } from "@testing-library/react";
import { ButtonIconTheme } from "./button-icon-theme";
import { describe, it, expect } from "vitest";

describe("Button icon theme test suite", () => {
  it("should render the button in the document", () => {
    const { getByTestId } = render(<ButtonIconTheme />);
    const buttonElement = getByTestId("button-icon-theme");

    expect(buttonElement).toBeInTheDocument();
  });
});
