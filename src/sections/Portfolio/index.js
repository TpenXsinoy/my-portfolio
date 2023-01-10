import React from "react";

import GLOBALS from "app-globals";

import { useWindowSize } from "hooks";
import { ProjectListsCard, SectionHeader } from "components";
import { Container, Section } from "elements";

import Xmuse from "../../static/images/projects/xmuse.png";
import Codechum from "../../static/images/projects/codechum.png";
import Alivee from "../../static/images/projects/alivee.png";
import Todo from "../../static/images/projects/todolist.png";

import styles from "./styles.module.scss";

const Projects = [
  {
    image: Xmuse,
    name: "XMuse",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint",
    link: "/",
  },
  {
    image: Codechum,
    name: "Codechum Landing Page",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint",
    link: null,
  },
  {
    image: Alivee,
    name: "Alivee",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint",
    link: "/",
  },
  {
    image: Todo,
    name: "Todo App",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint",
    link: "/",
  },
];

const Portfolio = () => {
  const { isSmallDesktop, isDesktop } = useWindowSize();
  return (
    <Section
      className={styles.Portfolio}
      id={(() => {
        if (isSmallDesktop || isDesktop) {
          return null;
        }
        return "portfolio";
      })()}
    >
      <Container className={styles.Portfolio_container}>
        <SectionHeader
          title="PORTFOLIO"
          subInfo={GLOBALS.SUB_INFO.PORTFOLIO}
          id="portfolio"
        />
        <div className={styles.Portfolio_projects}>
          {Projects.map((project) => (
            <ProjectListsCard
              image={project.image}
              name={project.name}
              detail={project.detail}
              link={project.link}
              key={project.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
