import { FC } from "react";
import { MainLayoutProps } from "./main-layout.types";
import styles from "./main-layout.module.css";
import LogoWhite from "@/assets/icons/logo-white.svg";
import LogoBlack from "@/assets/icons/logo.svg";
import { ButtonIconTheme } from "@/components/button-icon-theme/button-icon-theme";
import { useThemeContext } from "@/hooks/use-theme-context";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { isDarkTheme } = useThemeContext();
  return (
    <section
      className={`${styles["main-wrapper"]} ${
        isDarkTheme ? styles["main-wrapper-dark"] : styles["main-wrapper-light"]
      }`}
    >
      <section className={styles["content-wrapper"]}>
        <div
          className={`${styles["header-wrapper"]} ${
            isDarkTheme
              ? styles["header-wrapper-dark"]
              : styles["header-wrapper-light"]
          }`}
        >
          <img
            src={isDarkTheme ? LogoWhite : LogoBlack}
            alt="extension manager logo"
          />
          <ButtonIconTheme />
        </div>
        {children}
      </section>
    </section>
  );
};
