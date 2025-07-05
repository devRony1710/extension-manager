import { RemoveExtensionConfirmModalProps } from "./remove-extension-confirm-modal.types";
import styles from "./remove-extension-confirm-modal.module.css";

export const RemoveExtensionConfirmModal = ({
  onClose,
}: RemoveExtensionConfirmModalProps) => {
  return (
    <div className={styles["removeExtensionConfirmModalContainer"]}>
      <p>Are you sure you want to remove this extension?</p>
      <div className={styles["buttonsContainer"]}>
        <button className={styles["buttonCancel"]} onClick={onClose}>
          Cancel
        </button>
        <button className={styles["buttonRemove"]} onClick={onClose}>
          Remove
        </button>
      </div>
    </div>
  );
};
