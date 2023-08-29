import React from "react";

import logo from "../../static/images/profiles/logo.png";

import styles from "./styles.module.scss";

const Preloader = () => {
  return (
    <div className={styles.Preloader}>
      <img
        className={styles.Preloader_image}
        src={logo}
        alt="logo"
        width={180}
      />
    </div>
  );
};

export default Preloader;
