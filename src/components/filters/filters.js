import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styles from "./filters.module.css";
import { useThemeContext } from "@/hooks/use-theme-context";
export const Filters = ({ options, getActiveOption }) => {
    const { isDarkTheme } = useThemeContext();
    const [optionsCopy, setOptionsCopy] = useState(options);
    const handleFilterClick = (option) => {
        // Si la opción ya está activa, no hace nada evitando render innecesario
        if (option.active)
            return;
        setOptionsCopy((prev) => prev.map((item) => item.id === option.id
            ? { ...item, active: true }
            : { ...item, active: false }));
    };
    useEffect(() => {
        getActiveOption(optionsCopy.find((option) => option.active));
    }, [optionsCopy, getActiveOption]);
    return (_jsx("section", { className: styles["filtersContainer"], children: optionsCopy.map((option) => (_jsx("button", { "aria-pressed": option.active, onClick: () => handleFilterClick(option), className: `${styles["filterButton"]} ${option.active && isDarkTheme
                ? styles["filterButtonActiveDark"]
                : option.active && !isDarkTheme
                    ? styles["filterButtonActiveLight"]
                    : isDarkTheme
                        ? styles["filterButtonDefaultDark"]
                        : styles["filterButtonDefaultLight"]}`, children: option.label }, option.id))) }));
};
