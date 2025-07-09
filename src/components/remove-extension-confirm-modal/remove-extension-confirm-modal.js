import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./remove-extension-confirm-modal.module.css";
export const RemoveExtensionConfirmModal = ({ onClose, }) => {
    return (_jsxs("div", { className: styles["removeExtensionConfirmModalContainer"], children: [_jsx("p", { children: "Are you sure you want to remove this extension?" }), _jsxs("div", { className: styles["buttonsContainer"], children: [_jsx("button", { className: styles["buttonCancel"], onClick: onClose, children: "Cancel" }), _jsx("button", { className: styles["buttonRemove"], onClick: onClose, children: "Remove" })] })] }));
};
