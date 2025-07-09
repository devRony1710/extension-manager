import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./toggle-button.module.css";
export const ToggleButton = ({ isActive, handleOnToggle, }) => {
    return (_jsx("button", { className: `${styles["toggleButton"]} ${isActive ? styles["toggleActiveButton"] : ""}`, onClick: () => handleOnToggle(), children: _jsx("div", { className: `${styles["toggleButtonDot"]} ${isActive
                ? `${styles["toggleActiveButtonDot"]} ${styles["toggleAnimation"]}`
                : ""}` }) }));
};
