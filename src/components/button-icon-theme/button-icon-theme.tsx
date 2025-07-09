import SunIcon from "@/assets/icons/icon-sun.svg";
import MoonIcon from "@/assets/icons/icon-moon.svg";
import styles from "./button-icon-theme.module.css";
import { useThemeContext } from "@/hooks/use-theme-context";

export const ButtonIconTheme = () => {
  const { changeTheme, isDarkTheme } = useThemeContext();
  return (
    <button
      data-testid="button-icon-theme"
      type="button"
      className={`${styles["button-icon-container"]} ${
        isDarkTheme
          ? styles["button-icon-container-dark"]
          : styles["button-icon-container-light"]
      }`}
      onClick={changeTheme}
    >
      <img src={isDarkTheme ? SunIcon : MoonIcon} alt="Toggle theme" />
    </button>
  );
};
