import { useContext } from "react";
import { AppContext } from "@/context/app-context";
export const useThemeContext = () => {
    const { theme, changeTheme } = useContext(AppContext);
    const isDarkTheme = theme === "dark";
    return { theme, changeTheme, isDarkTheme };
};
