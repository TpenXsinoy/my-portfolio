import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import GLOBALS from "app-globals";

import styles from "./styles.module.scss";

const ProjectTab = ({ activeTab, hasOptional = true, setActiveTab }) => (
  <div className={styles.ProjectTab}>
    <button
      type="button"
      onClick={() => setActiveTab(GLOBALS.PROJECT_TYPES.FRONT_END)}
      className={cn(styles.ProjectTab_button, {
        [styles.ProjectTab_button___active]:
          activeTab === GLOBALS.PROJECT_TYPES.FRONT_END,
      })}
    >
      FRONTEND
    </button>
    {/* <button
      type="button"
      onClick={() => setActiveTab(GLOBALS.PROJECT_TYPES.FULLSTACK)}
      className={cn(styles.ProjectTab_button, {
        [styles.ProjectTab_button___optional]: hasOptional,
        [styles.ProjectTab_button___active]:
          activeTab === GLOBALS.PROJECT_TYPES.FULLSTACK,
      })}
    >
      FULLSTACK
    </button> */}
    <button
      type="button"
      onClick={() => setActiveTab(GLOBALS.PROJECT_TYPES.BACK_END)}
      className={cn(styles.ProjectTab_button, {
        [styles.ProjectTab_button___optional]: hasOptional,
        [styles.ProjectTab_button___active]:
          activeTab === GLOBALS.PROJECT_TYPES.BACK_END,
      })}
    >
      BACKEND
    </button>
  </div>
);

ProjectTab.defaultProps = {
  hasOptional: false,
};

ProjectTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  hasOptional: PropTypes.bool,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProjectTab;
