import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const SkillList = ({ name, image, isVisible }) => (
  <div
    className={cn(styles.SkillList, isVisible && styles.SkillList___animate)}
  >
    <img src={image} alt={name} width={100} height={100} />
  </div>
);

SkillList.defaultProps = {
  isVisible: false,
};

SkillList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

export default SkillList;
