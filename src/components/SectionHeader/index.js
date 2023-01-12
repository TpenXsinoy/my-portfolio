import React from "react";

import PropTypes from "prop-types";

import { useWindowSize } from "hooks";
import { Text } from "elements";
import { textTypes } from "elements/constants";

import styles from "./styles.module.scss";

const SectionHeader = React.forwardRef(({ title, subInfo, id }, ref) => {
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop, isDesktop } =
    useWindowSize();
  return (
    <div
      ref={ref}
      className={styles.SectionHeader}
      id={(() => {
        if (isSmallDesktop || isDesktop) {
          if (subInfo) return null;
        }
        return id;
      })()}
    >
      <div className={styles.SectionHeader_title}>
        <Text
          className={styles.SectionHeader_title_text}
          type={(() => {
            if (isSmallDesktop || isTablet) return textTypes.HEADING.XXL;
            else if (isSmallMobile) return textTypes.HEADING.LG;
            else if (isMobile) return textTypes.HEADING.XL;
            return textTypes.HEADING.XXXL;
          })()}
        >
          {title}
        </Text>
        <div className={styles.SectionHeader_title_line}></div>
      </div>

      {subInfo && (
        <Text
          className={styles.SectionHeader_subInfo}
          id={isSmallDesktop || isDesktop ? id : null}
        >
          {subInfo}
        </Text>
      )}
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";

SectionHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subInfo: PropTypes.string,
};

export default SectionHeader;
