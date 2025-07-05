import { FC } from "react";
import { ModalProps } from "./modal.types";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.css";

export const ModalUI: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <button className={styles["buttonClose"]} onClick={onClose}>
          <CloseIcon color="primary" />
        </button>
        {children}
      </div>
    </div>
  );
};

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    document.getElementById("modal-root")!
  );
};

// Se agregan los estilos de esta forma porque si se hace con modules no se accede a ellos porque no están en la misma jerarquía del DOM porque el modal
// no es hijo directo del DOM
const backdropStyle: React.CSSProperties = {
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

const modalStyle: React.CSSProperties = {
  background: "var(--dark-gradient)",
  padding: "20px",
  borderRadius: "12px",
  width: "80%",
  maxWidth: "600px",
  height: "400px",
  position: "relative",
};

export default Modal;
