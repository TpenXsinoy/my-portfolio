import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import GLOBALS from "app-globals";

import { Icon } from "..";
import { buttonTypes } from "./constants";
import styles from "./styles.module.scss";

const Button = ({
  children,
  className,
  disabled,
  icon,
  iconClassName,
  id,
  innerRef,
  kind,
  tabIndex,
  type,
  onClick,
}) => {
  return (
    <button
      ref={(e) => {
        if (innerRef) {
          innerRef.current = e;
        }
      }}
      className={cn(className, styles[`Button___${type}`], {
        [styles.Button___withIcon]: icon !== null,
      })}
      disabled={disabled}
      id={id}
      tabIndex={tabIndex}
      type={kind}
      onClick={onClick}
    >
      {icon && (
        <Icon
          className={cn(styles.Button___withIcon_icon, iconClassName)}
          icon={icon}
        />
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: null,
  disabled: false,
  icon: null,
  id: null,
  kind: GLOBALS.BUTTON_KINDS.BUTTON,
  tabIndex: 0,
  type: buttonTypes.PRIMARY.GREEN,
  wrapperClassName: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

Button.propTypes = {
  kind: PropTypes.oneOf([
    GLOBALS.BUTTON_KINDS.BUTTON,
    GLOBALS.BUTTON_KINDS.SUBMIT,
    GLOBALS.BUTTON_KINDS.RESET,
  ]),
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.GREEN,
    buttonTypes.PRIMARY.GRAY,
    buttonTypes.SECONDARY.GREEN,
    buttonTypes.TEXT.GREEN,
    buttonTypes.TEXT.WHITE,
    buttonTypes.TEXT.BLACK,
    buttonTypes.TEXT.GRAY,
  ]),
  innerRef: PropTypes.any,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  iconClassName: PropTypes.string,
};

export default Button;
