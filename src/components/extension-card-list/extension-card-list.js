import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./extension-card-list.module.css";
import { ToggleButton } from "../toggle-button/toggle-button";
import { useThemeContext } from "@/hooks/use-theme-context";
import Modal from "../modal/modal";
import { RemoveExtensionConfirmModal } from "../remove-extension-confirm-modal/remove-extension-confirm-modal";
import { LoadingCardsGrid } from "../loading-cards-grid/loading-cards-grid";
export const ExtensionCardList = ({ extensionsData, handleOnToggle, isLoading, }) => {
    const { isDarkTheme } = useThemeContext();
    const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
    if (isLoading) {
        return _jsx(LoadingCardsGrid, {});
    }
    if (extensionsData?.length === 0) {
        return (_jsx("section", { className: styles["emptyExtensionListContainer"], children: _jsx("p", { className: `${styles["emptyExtensionListContainerText"]} ${isDarkTheme
                    ? styles["emptyExtensionListContainerTextDark"]
                    : styles["emptyExtensionListContainerTextLight"]}`, children: "No extensions found" }) }));
    }
    return (_jsxs("section", { className: styles["extensionCardListContainer"], children: [extensionsData?.map((extension) => (_jsxs("div", { className: `${styles["extensionCard"]} ${isDarkTheme
                    ? styles["extensionCardDark"]
                    : styles["extensionCardLight"]}`, children: [_jsxs("div", { className: styles["extensionCardInfoContainer"], children: [_jsx("img", { className: styles["extensionImg"], src: extension.logo, alt: extension.name }), _jsxs("div", { className: styles["extensionInfoWrapper"], children: [_jsx("span", { className: `${styles["extensionCardTitle"]} ${isDarkTheme
                                            ? styles["extensionCardTitleDark"]
                                            : styles["extensionCardTitleLight"]}`, children: extension.name }), _jsx("span", { className: `${styles["extensionCardDescription"]} ${isDarkTheme
                                            ? styles["extensionCardDescriptionDark"]
                                            : styles["extensionCardDescriptionLight"]}`, children: extension.description })] })] }), _jsxs("div", { className: styles["extensionCardBottomActionsContainer"], children: [_jsx("button", { className: `${styles["extensionDeleteButton"]} ${isDarkTheme
                                    ? styles["extensionDeleteButtonDark"]
                                    : styles["extensionDeleteButtonLight"]}`, onClick: () => setIsOpenRemoveModal(true), children: "Remove" }), _jsx(ToggleButton, { isActive: extension.isActive, handleOnToggle: () => handleOnToggle(extension.name) })] })] }, extension.name))), isOpenRemoveModal && (_jsx(Modal, { onClose: () => setIsOpenRemoveModal(false), children: _jsx(RemoveExtensionConfirmModal, { onClose: () => setIsOpenRemoveModal(false) }) }))] }));
};
