import React from "react";
import { Link } from "react-scroll";

import { useWindowSize } from "hooks";
import { Container, Text, Section } from "elements";
import { SocialIcon } from "react-social-icons";

import Logo from "../../static/images/profiles/logo.png";
import LogoName from "../../static/images/profiles/logo-name.png";
import ph from "../../static/images/profiles/ph.png";

import styles from "./styles.module.scss";

const Footer = () => {
  const { isSmallMobile, isMobile } = useWindowSize();
  return (
    <footer>
      <Section className={styles.Footer}>
        <Container className={styles.Footer_container}>
          <Link
            className={styles.Footer_logo}
            to="hero"
            smooth
            offset={-200}
            duration={700}
          >
            {isMobile || isSmallMobile ? (
              <img
                src={Logo}
                className={styles.Footer_logo_img}
                alt="Logo"
                height={40}
              />
            ) : (
              <img
                src={LogoName}
                className={styles.Footer_logo_img}
                alt="Logo"
                height={40}
              />
            )}
          </Link>

          <div className={styles.Footer_info}>
            <div className={styles.Footer_info_socials}>
              <SocialIcon
                url="https://www.linkedin.com/in/stephine-sinoy-a786a2221/"
                className={styles.Footer_info_socials_icon}
                bgColor="white"
              />
              <SocialIcon
                url="https://github.com/TpenXsinoy"
                className={styles.Footer_info_socials_icon}
                bgColor="white"
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
      </Section>
    </footer>
  );
};
export default Footer;
