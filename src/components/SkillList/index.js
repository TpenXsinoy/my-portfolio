import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "elements";
import { textTypes } from "elements/constants";

import styles from "./styles.module.scss";

const SkillList = ({ title, percent }) => (
  <div className={styles.SkillList}>
    <Text type={textTypes.BODY.LG}>{title}</Text>
    <div className={styles.SkillList_container}>
      <div className={styles.SkillList_bar}>
        <span
          className={cn(
            styles.SkillList_progressBar,
            styles[`SkillList___${percent}`]
          )}
        ></span>
      </div>

      <Text>{percent}%</Text>
    </div>
  </div>
);

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default SkillList;
