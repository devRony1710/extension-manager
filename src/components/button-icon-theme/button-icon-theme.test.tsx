import { render, screen } from "@testing-library/react";
import { ButtonIconTheme } from "./button-icon-theme";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect, beforeAll } from "vitest";
import { useThemeContext } from "@/hooks/use-theme-context";
import { vi } from "vitest";

/* hacemos un mock de useThemeContext
  para simular el contexto del tema
 y poder probar el cambio de tema en el botón
 y el cambio de clase en el botón*/

vi.mock("@/hooks/use-theme-context");

describe("Button icon theme test suite", () => {
  beforeAll(() => {
    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme: false,
      changeTheme: vi.fn(),
      theme: "light",
    });
  });

  it("should render the button in the document", () => {
    const { getByTestId } = render(<ButtonIconTheme />);
    const buttonElement = getByTestId("button-icon-theme");

    expect(buttonElement).toBeInTheDocument();
  });

  it("should change class when clicked", async () => {
    // Configura el usuario para simular eventos
    const user = userEvent.setup();

    // variables para simular el estado del tema
    let isDarkTheme = false;

    // Mockea el hook con un changeTheme que cambia isDarkTheme
    const changeTheme = vi.fn(() => {
      isDarkTheme = !isDarkTheme;
    });

    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme,
      changeTheme,
      theme: "light",
    });

    // Renderiza el componente con el mock del hook
    const { rerender } = render(<ButtonIconTheme />);

    const buttonElement = screen.getByTestId("button-icon-theme");

    // ✅ Verifica clase inicial (light)
    expect(buttonElement.className).toContain("button-icon-container-light");

    await user.click(buttonElement);

    // Re-renderiza el componente con isDarkTheme actualizado
    vi.mocked(useThemeContext).mockReturnValue({
      isDarkTheme,
      changeTheme,
      theme: "dark",
    });
    rerender(<ButtonIconTheme />);

    // Verifica que cambió a dark
    expect(buttonElement.className).toContain("button-icon-container-dark");
  });
});
