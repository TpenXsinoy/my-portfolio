import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import { Icon } from "../..";
import buttonTypes from "../constants/buttonTypes";
import styles from "../styles.module.scss";

const ButtonLink = ({
  children,
  type,
  className,
  to,
  icon,
  id,
  tabIndex,
  disabled,
  onClick,
  shouldOpenNewTab,
  download,
}) => {
  const allChildren = (
    <>
      {icon && (
        <Icon
          className={styles.Button___withIcon_icon}
          data-test="icon"
          icon={icon}
        />
      )}
      {children}
    </>
  );

  return (
    <a
      className={cn(
        className,
        styles.Button___link,
        styles[`Button___${type}`],
        {
          [styles.Button___withIcon]: icon !== null,
          [styles.Button___disabled]: disabled,
        }
      )}
      data-test="nativeAnchor"
      href={to}
      id={id}
      rel="noreferrer"
      tabIndex={tabIndex}
      target={shouldOpenNewTab ? "_blank" : null}
      onClick={onClick}
      download={download}
    >
      {allChildren}
    </a>
  );
};

ButtonLink.defaultProps = {
  type: buttonTypes.SECONDARY.GREEN,
  className: null,
  id: null,
  icon: null,
  tabIndex: 0,
  disabled: false,
  onClick: null,
  shouldOpenNewTab: true,
  download: null,
};

ButtonLink.propTypes = {
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.GREEN,
    buttonTypes.PRIMARY.GRAY,
    buttonTypes.SECONDARY.GREEN,
    buttonTypes.TEXT.GREEN,
    buttonTypes.TEXT.WHITE,
    buttonTypes.TEXT.BLACK,
    buttonTypes.TEXT.GRAY,
  ]),
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  shouldOpenNewTab: PropTypes.bool,
  download: PropTypes.string,
};

export default ButtonLink;
