import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./main-layout.module.css";
import LogoWhite from "@/assets/icons/logo-white.svg";
import LogoBlack from "@/assets/icons/logo.svg";
import { ButtonIconTheme } from "@/components/button-icon-theme/button-icon-theme";
import { useThemeContext } from "@/hooks/use-theme-context";
export const MainLayout = ({ children }) => {
    const { isDarkTheme } = useThemeContext();
    return (_jsx("section", { className: `${styles["main-wrapper"]} ${isDarkTheme ? styles["main-wrapper-dark"] : styles["main-wrapper-light"]}`, children: _jsxs("section", { className: styles["content-wrapper"], children: [_jsxs("div", { className: `${styles["header-wrapper"]} ${isDarkTheme
                        ? styles["header-wrapper-dark"]
                        : styles["header-wrapper-light"]}`, children: [_jsx("img", { src: isDarkTheme ? LogoWhite : LogoBlack, alt: "extension manager logo" }), _jsx(ButtonIconTheme, {})] }), children] }) }));
};
