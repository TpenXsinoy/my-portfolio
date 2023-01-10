import React from "react";

import GLOBALS from "app-globals";

import { useWindowSize } from "hooks";
import { ResumeInfo, SectionHeader } from "components";
import { Container, Section } from "elements";

import styles from "./styles.module.scss";

const Information = [
  {
    title: "Summary",
    infos: [
      {
        name: "STEPHINE SINOY",
        subInfo:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas  vel sint commodi repudiandae",
        details: [
          "Dumlog, Taslisay City, Cebu",
          "+63 906 0264 692",
          "stephine.n.sinoy@gmail.com",
        ],
        date: null,
        org: null,
      },
    ],
  },
  {
    title: "Work Experience",
    infos: [
      {
        name: "FRONT-END DEVELOPER",
        subInfo: null,
        details: [
          "Implements new UI/UX designs to the application",
          "Builds reusable codes and optimizes page",
          "Develops new user-facing features that ensures  website visitors can easily interact with the page",
        ],
        date: "May 22, 2022 - August 31, 2022",
        org: "Codechum",
      },
      {
        name: "FREELANCE",
        subInfo: null,
        details: ["Landing Page Maker", "Graphic Designer"],
        date: "2022 - Present",
        org: "Social Media",
      },
    ],
  },
  {
    title: "Education",
    infos: [
      {
        name: "COLLEGE",
        subInfo: null,
        details: ["Bachelor of Science in Computer Science"],
        date: "2020 - 2023",
        org: "Cebu Institute of Technology - University",
      },
      {
        name: "SENIOR HIGH SCHOOL",
        subInfo: null,
        details: null,
        date: "2018 - 2020",
        org: "Cebu Institute of Technology - University",
      },
      {
        name: "JUNIOR HIGH SCHOOL",
        subInfo: null,
        details: null,
        date: "2014 - 2018",
        org: "St. Scholastica’s Academy - Tabunok",
      },
    ],
  },
];

const Resume = () => {
  const { isSmallDesktop, isDesktop } = useWindowSize();
  return (
    <Section
      className={styles.Resume}
      id={(() => {
        if (isSmallDesktop || isDesktop) {
          return null;
        }
        return "resume";
      })()}
    >
      <Container className={styles.Resume_container}>
        <SectionHeader
          title="RESUME"
          subInfo={GLOBALS.SUB_INFO.RESUME}
          id="resume"
        />
        <div className={styles.Resume_information}>
          {Information.map((info) => (
            <ResumeInfo
              title={info.title}
              infos={info.infos}
              key={info.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Resume;
