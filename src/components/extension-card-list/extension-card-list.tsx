import { FC } from "react";
import { ExtensionCardListProps } from "./extension-card-list.types";
import styles from "./extension-card-list.module.css";

export const ExtensionCardList: FC<ExtensionCardListProps> = ({
  extensionsData,
}) => {
  return (
    <section className={styles["extensionCardListContainer"]}>
      {extensionsData?.map((extension) => (
        <div key={extension.name} className={styles["extensionCard"]}>
          <div className={styles["extensionCardInfoContainer"]}>
            <img
              className={styles["extensionImg"]}
              src={extension.logo}
              alt={extension.name}
            />
            <div className={styles["extensionInfoWrapper"]}>
              <span className={styles["extensionCardTitle"]}>
                {extension.name}
              </span>
              <span className={styles["extensionCardDescription"]}>
                {extension.description}
              </span>
            </div>
          </div>
          <button>Install</button>
        </div>
      ))}
    </section>
  );
};
