import React from "react";

import PropTypes from "prop-types";
import cn from "classnames";

import { useWindowSize } from "hooks";
import { Text } from "elements";
import { textTypes } from "elements/constants";

import styles from "./styles.module.scss";
import GLOBALS from "app-globals";

const SectionHeader = React.forwardRef(
  ({ title, subInfo, id, isBlue }, ref) => {
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
            colorClass={
              isBlue
                ? GLOBALS.COLOR_CLASSES.BLUE["400"]
                : GLOBALS.COLOR_CLASSES.NEUTRAL["0"]
            }
            type={(() => {
              if (isSmallDesktop || isTablet) return textTypes.HEADING.XXL;
              else if (isSmallMobile) return textTypes.HEADING.LG;
              else if (isMobile) return textTypes.HEADING.XL;
              return textTypes.HEADING.XXXL;
            })()}
          >
            {title}
          </Text>
          <div
            className={cn(
              styles.SectionHeader_title_line,
              isBlue && styles.SectionHeader_title___blue
            )}
          ></div>
        </div>

        {subInfo && (
          <Text
            className={styles.SectionHeader_subInfo}
            colorClass={
              isBlue
                ? GLOBALS.COLOR_CLASSES.BLUE["400"]
                : GLOBALS.COLOR_CLASSES.NEUTRAL["0"]
            }
            id={isSmallDesktop || isDesktop ? id : null}
          >
            {subInfo}
          </Text>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

SectionHeader.defaultProps = {
  isBlue: false,
};

SectionHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subInfo: PropTypes.string,
  isBlue: PropTypes.bool,
};

export default SectionHeader;
