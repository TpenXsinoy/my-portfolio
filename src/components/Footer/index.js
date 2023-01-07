import React from "react";
import { Link } from "react-scroll";

import GLOBALS from "app-globals";

import { Container, Text } from "elements";
import { textTypes } from "elements/constants";
import { SocialIcon } from "react-social-icons";

import Logo from "../../static/images/sample.svg";
import ph from "../../static/images/ph.png";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.Footer_container}>
        <Link
          className={styles.Footer_logo}
          to="hero"
          smooth
          offset={-200}
          duration={700}
        >
          <img
            src={Logo}
            className={styles.Footer_logo_img}
            alt="Sinoy Logo"
            width={40}
            height={40}
          />
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
            type={textTypes.HEADING.MD}
          >
            Stephine Sinoy
          </Text>
        </Link>

        <div className={styles.Footer_info}>
          <div className={styles.Footer_info_socials}>
            <SocialIcon
              url="https://www.facebook.com/ako.stephine"
              className={styles.Footer_info_socials_icon}
            />
            <SocialIcon
              url="https://github.com/TpenXsinoy"
              className={styles.Footer_info_socials_icon}
            />
          </div>

          <Text className={styles.Footer_info_text}>
            Stephine Sinoy
            <img
              src={ph}
              className={styles.Footer_info_text_flag}
              alt="🇵🇭"
              width={16}
              height={16}
            />
          </Text>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
