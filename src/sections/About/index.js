import React from "react";

import GLOBALS from "app-globals";

import { useWindowSize } from "hooks";
import { Container, Icon, Section, Text } from "elements";
import { SkillList, SectionHeader } from "components";
import { textTypes } from "elements/constants";

import SideProfile from "../../static/images/profiles/side-profile.webp";

import styles from "./styles.module.scss";

const Details = [
  {
    name: "Birthday:",
    info: "31 May 2001",
  },
  {
    name: "Phone:",
    info: "+63 906 0264 692",
  },
  {
    name: "Course:",
    info: "BS Computer Science",
  },
  {
    name: "Age:",
    info: "21",
  },
  {
    name: "City:",
    info: "Talisay City, Cebu",
  },
  {
    name: "Email:",
    info: "stephine.n.sinoy@gmail.com",
  },
];

const Skills = [
  {
    name: "HTML",
    percent: GLOBALS.SKILL_WIDTH.NINETY_FIVE,
  },

  {
    name: "CSS",
    percent: GLOBALS.SKILL_WIDTH.EIGHTY_FIVE,
  },
  {
    name: "JAVASCRIPT",
    percent: GLOBALS.SKILL_WIDTH.SIXTY_FIVE,
  },
  {
    name: "REACT",
    percent: GLOBALS.SKILL_WIDTH.SIXTY,
  },
  {
    name: "C#",
    percent: GLOBALS.SKILL_WIDTH.FORTY,
  },
  {
    name: "JAVA",
    percent: GLOBALS.SKILL_WIDTH.SIXTY_FIVE,
  },
];

const About = () => {
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop } = useWindowSize();
  return (
    <Section
      // title="ABOUT ME"
      // subInfo={GLOBALS.SUB_INFO.ABOUT}
      className={styles.About}
    >
      <Container className={styles.About_container}>
        <SectionHeader
          title="ABOUT ME"
          subInfo={GLOBALS.SUB_INFO.ABOUT}
          id="about"
        />
        <div className={styles.About_content}>
          <div className={styles.About_content_image}>
            <img src={SideProfile} alt="Profile" />
          </div>

          <div className={styles.About_content_info}>
            <div className={styles.About_content_info_title}>
              <Text
                colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
                type={(() => {
                  if (isSmallDesktop || isTablet) return textTypes.HEADING.XL;
                  else if (isMobile || isSmallMobile)
                    return textTypes.HEADING.LG;
                  return textTypes.HEADING.XXL;
                })()}
              >
                Web developer
              </Text>

              <Text className={styles.About_content_info_subInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas similique accusantium nemo autem.
                Veritatis
              </Text>
            </div>

            <div className={styles.About_content_info_personalInfo}>
              {Details.map((detail) => (
                <div
                  key={detail.name}
                  className={styles.About_content_info_personalInfo_detail}
                >
                  <Icon
                    className={styles.About_content_icon}
                    icon="keyboard_arrow_right"
                  ></Icon>
                  <Text
                    type={textTypes.HEADING.XS}
                    className={
                      styles.About_content_info_personalInfo_detail_name
                    }
                  >
                    {detail.name}
                  </Text>
                  <Text>{detail.info}</Text>
                </div>
              ))}
            </div>

            <Text className={styles.About_content_info_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborumnnumquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis
            </Text>
          </div>
        </div>

        <Text type={isMobile ? textTypes.HEADING.LG : textTypes.HEADING.XL}>
          SKILLS
        </Text>
        <div className={styles.About_skills}>
          {Skills.map((skill) => (
            <SkillList
              title={skill.name}
              percent={skill.percent}
              key={skill.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default About;
