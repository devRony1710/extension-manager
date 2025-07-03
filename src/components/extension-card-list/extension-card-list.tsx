import { FC } from "react";
import { ExtensionCardListProps } from "./extension-card-list.types";
import styles from "./extension-card-list.module.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import { useThemeContext } from "@/hooks/use-theme-context";

export const ExtensionCardList: FC<ExtensionCardListProps> = ({
  extensionsData,
  handleOnToggle,
}) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <section className={styles["extensionCardListContainer"]}>
      {extensionsData?.map((extension) => (
        <div
          key={extension.name}
          className={`${styles["extensionCard"]} ${
            isDarkTheme
              ? styles["extensionCardDark"]
              : styles["extensionCardLight"]
          }`}
        >
          <div className={styles["extensionCardInfoContainer"]}>
            <img
              className={styles["extensionImg"]}
              src={extension.logo}
              alt={extension.name}
            />
            <div className={styles["extensionInfoWrapper"]}>
              <span
                className={`${styles["extensionCardTitle"]} ${
                  isDarkTheme
                    ? styles["extensionCardTitleDark"]
                    : styles["extensionCardTitleLight"]
                }`}
              >
                {extension.name}
              </span>
              <span
                className={`${styles["extensionCardDescription"]} ${
                  isDarkTheme
                    ? styles["extensionCardDescriptionDark"]
                    : styles["extensionCardDescriptionLight"]
                }`}
              >
                {extension.description}
              </span>
            </div>
          </div>

          <div className={styles["extensionCardBottomActionsContainer"]}>
            <button
              className={`${styles["extensionDeleteButton"]} ${
                isDarkTheme
                  ? styles["extensionDeleteButtonDark"]
                  : styles["extensionDeleteButtonLight"]
              }`}
            >
              Remove
            </button>
            <ToggleButton
              isActive={extension.isActive}
              handleOnToggle={() => handleOnToggle(extension.name)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
