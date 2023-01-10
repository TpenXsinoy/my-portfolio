import React from "react";

import PropTypes from "prop-types";

import GLOBALS from "app-globals";

import { Text, Icon, Card } from "elements";
import { textTypes } from "elements/constants";
import { SocialIcon } from "react-social-icons";
import { useWindowSize } from "hooks";

import styles from "./styles.module.scss";

const ContactCard = ({ icon, name, detail, hasSocials }) => {
  const { isSmallMobile, isMobile } = useWindowSize();
  return (
    <Card className={styles.ContactCard}>
      <div>
        <Icon className={styles.ContactCard_icon} icon={icon}></Icon>
      </div>

      <div className={styles.ContactCard_info}>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL["400"]}
          type={
            isSmallMobile || isMobile
              ? textTypes.HEADING.XS
              : textTypes.HEADING.SM
          }
        >
          {name}
        </Text>
        {!hasSocials ? (
          <Text className={styles.ContactCard_info_detail}>{detail}</Text>
        ) : (
          <div className={styles.ContactCard_info_socials}>
            <div className={styles.ContactCard_info_socials_container}>
              <SocialIcon
                url="https://www.facebook.com/ako.stephine"
                className={styles.ContactCard_info_socials_icon}
                bgColor="none"
                fgColor="white"
              />
            </div>

            <div className={styles.ContactCard_info_socials_container}>
              <SocialIcon
                url="https://www.instagram.com/stepenxsinoy/"
                className={styles.ContactCard_info_socials_icon}
                bgColor="none"
                fgColor="white"
              />
            </div>
            <div className={styles.ContactCard_info_socials_container}>
              <SocialIcon
                url="https://twitter.com/stipinkyuri"
                className={styles.ContactCard_info_socials_icon}
                bgColor="none"
                fgColor="white"
              />
            </div>
            <div className={styles.ContactCard_info_socials_container}>
              <SocialIcon
                url="https://www.linkedin.com/in/stephine-sinoy-a786a2221/"
                className={styles.ContactCard_info_socials_icon}
                bgColor="none"
                fgColor="white"
              />
            </div>
            <div className={styles.ContactCard_info_socials_container}>
              <SocialIcon
                url="https://github.com/TpenXsinoy"
                className={styles.ContactCard_info_socials_icon}
                bgColor="none"
                fgColor="white"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

ContactCard.defaultProps = {
  icon: null,
  detail: null,
  hasSocials: false,
};

ContactCard.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  hasSocials: PropTypes.bool,
};

export default ContactCard;
