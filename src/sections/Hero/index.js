import React from "react";

import GLOBALS from "app-globals";

import { useWindowSize } from "hooks";
import { Container, Section, Text } from "elements";
import { textTypes } from "elements/constants";
import { SocialIcon } from "react-social-icons";

import Profile from "../../static/images/profiles/profile-pic1.png";

import styles from "./styles.module.scss";

const Hero = () => {
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop } = useWindowSize();

  return (
    <Section id="hero" className={styles.Hero}>
      <Container className={styles.Hero_container}>
        <div className={styles.Hero_details}>
          <Text
            type={(() => {
              if (isSmallDesktop || isTablet) return textTypes.HEADING.MD;
              else if (isSmallMobile) return textTypes.HEADING.XS;
              else if (isMobile) return textTypes.HEADING.SM;
              return textTypes.HEADING.LG;
            })()}
          >
            Hi, my name is
          </Text>

          <Text
            className={styles.Hero_details_name}
            colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
            type={(() => {
              if (isSmallDesktop || isTablet) return textTypes.HEADING.XXXXXL;
              else if (isSmallMobile) return textTypes.HEADING.XXL;
              else if (isMobile) return textTypes.HEADING.XXXXL;
              return textTypes.HEADING.XXXXXXL;
            })()}
          >
            Stephine Sinoy
          </Text>

          <Text className={styles.Hero_details_description}>
            I’m a{" "}
            <span className={styles.Hero_details_span}>Web developer</span>{" "}
            passionate on elevating your online presence
          </Text>

          <div className={styles.Hero_details_socials}>
            <div className={styles.Hero_details_icons}>
              <SocialIcon
                url="https://www.facebook.com/ako.stephine"
                className={styles.Hero_details_socials_icon}
                bgColor="#0d0d0d"
                fgColor="white"
              />
            </div>

            <div className={styles.Hero_details_icons}>
              <SocialIcon
                url="https://www.instagram.com/stepenxsinoy/"
                className={styles.Hero_details_socials_icon}
                bgColor="#0d0d0d"
                fgColor="white"
              />
            </div>
            <div className={styles.Hero_details_icons}>
              <SocialIcon
                url="https://twitter.com/stipinkyuri"
                className={styles.Hero_details_socials_icon}
                bgColor="#0d0d0d"
                fgColor="white"
              />
            </div>
            <div className={styles.Hero_details_icons}>
              <SocialIcon
                url="https://www.linkedin.com/in/stephine-sinoy-a786a2221/"
                className={styles.Hero_details_socials_icon}
                bgColor="#0d0d0d"
                fgColor="white"
              />
            </div>
            <div className={styles.Hero_details_icons}>
              <SocialIcon
                url="https://github.com/TpenXsinoy"
                className={styles.Hero_details_socials_icon}
                bgColor="#0d0d0d"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        <div className={styles.Hero_image}>
          <img src={Profile} alt="Profile" width={isSmallDesktop ? 400 : 600} />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
