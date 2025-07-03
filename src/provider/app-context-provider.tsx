import { AppContext } from "@/context/app-context";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ changeTheme, theme }), [changeTheme, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
