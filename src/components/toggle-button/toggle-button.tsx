import styles from "./toggle-button.module.css";
import { FC } from "react";
import { ToggleButtonProps } from "./toggle-button.types";

export const ToggleButton: FC<ToggleButtonProps> = ({
  isActive,
  handleOnToggle,
}) => {
  return (
    <button
      className={`${styles["toggleButton"]} ${
        isActive ? styles["toggleActiveButton"] : ""
      }`}
      onClick={() => handleOnToggle()}
    >
      <div
        className={`${styles["toggleButtonDot"]} ${
          isActive
            ? `${styles["toggleActiveButtonDot"]} ${styles["toggleAnimation"]}`
            : ""
        }`}
      />
    </button>
  );
};
