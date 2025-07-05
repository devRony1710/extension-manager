import { AppContext } from "@/context/app-context";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const getThemeValueFromLocalStorage = () => {
    return localStorage.getItem("theme") || "dark";
  };

  const [theme, setTheme] = useState(getThemeValueFromLocalStorage());

  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ changeTheme, theme }), [changeTheme, theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
