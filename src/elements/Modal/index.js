import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

import Icon from "../Icon";

import modalPositions from "./constants/modalPositions";
import modalSizes from "./constants/modalSizes";
import styles from "./styles.module.scss";

import "./styles.scss";

const Modal = ({
  children,
  className,
  closeModalId,
  handleClose,
  hasCloseButton,
  id,
  isOpen,
  overlayClassName,
  position,
  size,
}) => (
  <ReactModal
    ariaHideApp
    shouldCloseOnEsc
    shouldCloseOnOverlayClick
    shouldFocusAfterRender
    // second condition is just a temporary workaround for tests
    shouldReturnFocusAfterClose
    bodyOpenClassName={styles.Modal_body___open}
    className={cn(
      className,
      styles[`Modal___${size}`],
      styles[`Modal___${position}`]
    )}
    contentLabel="Modal"
    htmlOpenClassName={styles.Modal_html___open}
    id={id}
    isOpen={isOpen}
    overlayClassName={cn(
      styles[`Modal_overlay___${position}`],
      overlayClassName
    )}
    portalClassName={styles.Modal_portal}
    onRequestClose={handleClose}
  >
    {hasCloseButton && (
      <button
        className={styles.Modal_close}
        data-test="closeButton"
        id={closeModalId}
        type="button"
        onClick={handleClose}
      >
        <Icon className={styles.Modal_close_icon} icon="close" />
      </button>
    )}
    {children}
  </ReactModal>
);

ReactModal.setAppElement(document.getElementById("root"));

Modal.defaultProps = {
  className: null,
  closeModalId: null,
  handleClose: null,
  hasCloseButton: true,
  id: null,
  position: modalPositions.TOP,
  size: modalSizes.MD,
};

Modal.propTypes = {
  className: PropTypes.string,
  closeModalId: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf([
    modalSizes.LG,
    modalSizes.MD,
    modalSizes.SM,
    modalSizes.XS,
  ]),
  position: PropTypes.oneOf([modalPositions.CENTER, modalPositions.TOP]),
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func,
  hasCloseButton: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  overlayClassName: PropTypes.string,
};

export default Modal;
