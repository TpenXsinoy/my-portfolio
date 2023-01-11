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
      "This project helped me enhance my JavaScript skills and in layouting the elements",
    link: "https://tpenxsinoy.github.io/xmuse/",
  },
  {
    image: Codechum,
    name: "Codechum Landing Page",
    detail:
      "Doing this project allowed me to gain hands-on experience with managing different states, and deepened my ability in utilizing REACT in building responsive and user-friendly web applications",
    link: null,
  },
  {
    image: Alivee,
    name: "Alivee",
    detail:
      "This is project improved my skills on layouting and visualizing the arrangement of the elements in a website",
    link: "https://tpenxsinoy.github.io/alivee/",
  },
  {
    image: Todo,
    name: "Todo App",
    detail:
      "This project allowed me to understand dom manipulation and local storage management better",
    link: "https://tpenxsinoy.github.io/ToDo-App/",
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
