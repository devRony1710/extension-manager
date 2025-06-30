import SunIcon from "@/assets/icons/icon-sun.svg";
import styles from "./button-icon-theme.module.css";

export const ButtonIconTheme = () => {
  return (
    <button type="button" className={styles["button-icon-container"]}>
      <img src={SunIcon} alt="Toggle theme" />
    </button>
  );
};
