import { FC, useState } from "react";
import { ExtensionCardListProps } from "./extension-card-list.types";
import styles from "./extension-card-list.module.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import { useThemeContext } from "@/hooks/use-theme-context";
import Modal from "../modal/modal";
import { RemoveExtensionConfirmModal } from "../remove-extension-confirm-modal/remove-extension-confirm-modal";

export const ExtensionCardList: FC<ExtensionCardListProps> = ({
  extensionsData,
  handleOnToggle,
}) => {
  const { isDarkTheme } = useThemeContext();
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

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
              onClick={() => setIsOpenRemoveModal(true)}
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

      {isOpenRemoveModal && (
        <Modal onClose={() => setIsOpenRemoveModal(false)}>
          <RemoveExtensionConfirmModal
            onClose={() => setIsOpenRemoveModal(false)}
          />
        </Modal>
      )}
    </section>
  );
};
