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
  const { isSmallMobile, isMobile, isTablet, isSmallDesktop, isDesktop } =
    useWindowSize();
  return (
    <Section
      className={styles.About}
      id={(() => {
        if (isSmallDesktop || isDesktop) {
          return null;
        }
        return "about";
      })()}
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
                Highly motivated and skilled web developer. Excellent
                problem-solving skills and ability to work well in a team
                environment.
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
              I have a strong understanding of the basics of web development
              principles. Familiar with{" "}
              <span className={styles.About_span}>
                JavaScript, React, C#, Java, ASP.NET CORE
              </span>{" "}
              and always looking to expand my knowledge and skills in the field.
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
