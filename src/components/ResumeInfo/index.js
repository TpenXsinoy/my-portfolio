import React from "react";

import PropTypes from "prop-types";

import GLOBALS from "app-globals";

import { useWindowSize } from "hooks";
import { Icon, Text } from "elements";
import { textTypes } from "elements/constants";

import styles from "./styles.module.scss";

const ResumeInfo = ({ title, infos }) => {
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop } = useWindowSize();
  return (
    <div className={styles.ResumeInfo}>
      <Text
        className={styles.ResumeInfo_title}
        type={(() => {
          if (isSmallDesktop || isTablet) return textTypes.HEADING.LG;
          else if (isMobile) return textTypes.HEADING.MD;
          else if (isSmallMobile) return textTypes.HEADING.SM;
          return textTypes.HEADING.XL;
        })()}
      >
        {title}
      </Text>

      {infos.map((info) => (
        <div className={styles.ResumeInfo_infos} key={info.name}>
          <div className={styles.ResumeInfo_infos_circle}></div>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
            type={isMobile ? textTypes.HEADING.XXS : textTypes.HEADING.XS}
          >
            {info.name}
          </Text>

          {info.subInfo && (
            <Text className={styles.ResumeInfo_infos_subInfo}>
              {info.subInfo}
            </Text>
          )}

          {info.date && (
            <Text className={styles.ResumeInfo_infos_date}>{info.date}</Text>
          )}

          {info.org && (
            <Text className={styles.ResumeInfo_infos_org}>{info.org}</Text>
          )}

          {info.details &&
            info.details.map((detail) => (
              <div className={styles.ResumeInfo_infos_detail} key={detail}>
                <Icon
                  className={styles.ResumeInfo_infos_detail_icon}
                  icon="keyboard_arrow_right"
                />
                <Text className={styles.ResumeInfo_infos_detail_text}>
                  {detail}
                </Text>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

ResumeInfo.propTypes = {
  title: PropTypes.string.isRequired,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subInfo: PropTypes.string,
      details: PropTypes.array,
      date: PropTypes.string,
      org: PropTypes.string,
    })
  ),
};

export default ResumeInfo;
