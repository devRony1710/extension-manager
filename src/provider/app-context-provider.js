import { jsx as _jsx } from "react/jsx-runtime";
import { AppContext } from "@/context/app-context";
import { useCallback, useEffect, useMemo, useState, } from "react";
export const AppContextProvider = ({ children }) => {
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
    return _jsx(AppContext.Provider, { value: value, children: children });
};
