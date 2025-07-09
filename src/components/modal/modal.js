import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.css";
export const ModalUI = ({ onClose, children }) => {
    return (_jsx("div", { style: backdropStyle, children: _jsxs("div", { style: modalStyle, children: [_jsx("button", { className: styles["buttonClose"], onClick: onClose, children: _jsx(CloseIcon, { color: "primary" }) }), children] }) }));
};
const Modal = ({ children, onClose }) => {
    return createPortal(_jsx(ModalUI, { onClose: onClose, children: children }), document.getElementById("modal-root"));
};
// Se agregan los estilos de esta forma porque si se hace con modules no se accede a ellos porque no están en la misma jerarquía del DOM porque el modal
// no es hijo directo del DOM
const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const modalStyle = {
    background: "var(--dark-gradient)",
    padding: "20px",
    borderRadius: "12px",
    width: "80%",
    maxWidth: "600px",
    height: "400px",
    position: "relative",
};
export default Modal;
