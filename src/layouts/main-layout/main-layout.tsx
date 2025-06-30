import { FC } from "react";
import { MainLayoutProps } from "./main-layout.types";
import styles from "./main-layout.module.css";
import LogoWhite from "@/assets/icons/logo-white.svg";
import { ButtonIconTheme } from "@/components/button-icon-theme/button-icon-theme";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className={styles["main-wrapper"]}>
      <section className={styles["content-wrapper"]}>
        <div className={styles["header-wrapper"]}>
          <img src={LogoWhite} alt="extension manager logo" />
          <ButtonIconTheme />
        </div>
        {children}
      </section>
    </section>
  );
};
