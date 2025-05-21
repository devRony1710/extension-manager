import { FC } from "react";
import { MainLayoutProps } from "./main-layout.types";
import styles from "./main-layout.module.css";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className={styles["main-wrapper"]}>
      <span>Hola mundo</span>
      {children}
    </section>
  );
};
