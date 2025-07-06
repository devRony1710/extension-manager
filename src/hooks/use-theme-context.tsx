import { useContext } from "react";
import { AppContext } from "@/context/app-context";
import { UseThemeContextType } from "./use-theme-context.types";

export const useThemeContext = (): UseThemeContextType => {
  const { theme, changeTheme } = useContext(AppContext);

  const isDarkTheme = theme === "dark";

  return { theme, changeTheme, isDarkTheme };
};
