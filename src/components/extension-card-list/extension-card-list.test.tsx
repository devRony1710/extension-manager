import { beforeAll, describe, expect, it, vi } from "vitest";
import { ExtensionCardList } from "./extension-card-list";
import { useThemeContext } from "@/hooks/use-theme-context";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonIconTheme } from "../button-icon-theme/button-icon-theme";

vi.mock("@/hooks/use-theme-context");

describe("ExtensionCardList test suite", () => {
  beforeAll(() => {
    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme: false,
      changeTheme: vi.fn(),
      theme: "light",
    });
  });

  it("should render the extension card list element with all information", () => {
    const { getByText } = render(
      <ExtensionCardList
        handleOnToggle={() => {}}
        isLoading={false}
        extensionsData={[
          {
            name: "Test Extension",
            logo: "https://example.com/logo.png",
            description: "This is a test extension",
            isActive: true,
          },
          {
            name: "Another Extension",
            logo: "https://example.com/logo2.png",
            description: "This is another test extension",
            isActive: false,
          },
        ]}
      />
    );

    const cardElementTitle1 = getByText("Test Extension");
    const cardElementTitle2 = getByText("Another Extension");
    const cardElementDescription1 = getByText("This is a test extension");
    const cardElementDescription2 = getByText("This is another test extension");

    expect(cardElementTitle1).toBeInTheDocument();
    expect(cardElementTitle2).toBeInTheDocument();
    expect(cardElementDescription1).toBeInTheDocument();
    expect(cardElementDescription2).toBeInTheDocument();
  });

  it("shoukld render the extension card list with no extensions", () => {
    const { getByText } = render(
      <ExtensionCardList
        handleOnToggle={() => {}}
        isLoading={false}
        extensionsData={[]}
      />
    );

    const emptyListText = getByText("No extensions found");

    expect(emptyListText).toBeInTheDocument();
  });

  it("should change the theme when the button is clicked", async () => {
    const user = userEvent.setup();

    let isDarkTheme = false;

    const changeTheme = vi.fn(() => {
      isDarkTheme = !isDarkTheme;
    });

    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme,
      changeTheme,
      theme: "light",
    });

    const { getByTestId: getByTestIdIconTheme, rerender: rerenderIconTheme } =
      render(<ButtonIconTheme />);

    const { getByText, rerender } = render(
      <ExtensionCardList
        handleOnToggle={() => {}}
        isLoading={false}
        extensionsData={[
          {
            name: "Test Extension",
            logo: "https://example.com/logo.png",
            description: "This is a test extension",
            isActive: true,
          },
        ]}
      />
    );

    const cardListElementTitle = getByText("Test Extension");

    expect(cardListElementTitle.className).toContain("extensionCardTitleLight");

    await user.click(getByTestIdIconTheme("button-icon-theme"));

    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme,
      changeTheme,
      theme: "dark",
    });

    rerenderIconTheme(<ButtonIconTheme />);

    rerender(
      <ExtensionCardList
        handleOnToggle={() => {}}
        isLoading={false}
        extensionsData={[
          {
            name: "Test Extension",
            logo: "https://example.com/logo.png",
            description: "This is a test extension",
            isActive: true,
          },
        ]}
      />
    );

    expect(cardListElementTitle.className).toContain("extensionCardTitleDark");
  });
});
