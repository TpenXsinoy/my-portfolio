import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import { useWindowSize } from "hooks";
import { Text } from "..";
import { textTypes } from "../constants";

import styles from "./styles.module.scss";

const Section = ({
  id,
  children,
  className,
  titleClassName,
  title,
  subInfo,
}) => {
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop, isDesktop } =
    useWindowSize();
  return (
    <section
      className={cn(styles.Section, className)}
      id={(() => {
        if (isSmallDesktop || isDesktop) {
          if (subInfo) return null;
        }
        return id;
      })()}
    >
      {title && (
        <div className={styles.Section_details}>
          <div className={cn(styles.Section_title, titleClassName)}>
            <Text
              className={cn(styles.Section_title_text, titleClassName)}
              id={id ? `${id}-title` : null}
              type={(() => {
                if (isSmallDesktop || isTablet) return textTypes.HEADING.XXL;
                else if (isSmallMobile) return textTypes.HEADING.LG;
                else if (isMobile) return textTypes.HEADING.XL;
                return textTypes.HEADING.XXXL;
              })()}
            >
              {title}
            </Text>
            <div className={styles.Section_title_line}></div>
          </div>

          {subInfo && (
            <Text className={styles.Section_subInfo} id={id}>
              {subInfo}
            </Text>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

Section.defaultProps = {
  id: null,
  className: null,
  children: null,
  title: null,
  subInfo: null,
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  subInfo: PropTypes.string,
};

export default Section;
