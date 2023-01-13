import React, { useState } from "react";

import cn from "classnames";

import GLOBALS from "app-globals";

import { useInView } from "react-intersection-observer";
import { useWindowSize } from "hooks";
import { ProjectListsCard, ProjectTab, SectionHeader } from "components";
import { Container, Section } from "elements";
import { frontendProjects, backendProjects } from "./constants";

import styles from "./styles.module.scss";

const Portfolio = () => {
  const { ref: portfolioRef, inView: isPortfolioVisible } = useInView({
    triggerOnce: true,
  });
  const { isSmallDesktop, isDesktop } = useWindowSize();
  const [activeTab, setActiveTab] = useState(GLOBALS.PROJECT_TYPES.FRONT_END);

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
      <Container className={styles.Portfolio_container} ref={portfolioRef}>
        <SectionHeader
          title="PORTFOLIO"
          subInfo={GLOBALS.SUB_INFO.PORTFOLIO}
          id="portfolio"
        />
        <ProjectTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div
          className={cn(
            styles.Portfolio_projects,
            isPortfolioVisible && styles.Portfolio___animate
          )}
        >
          {activeTab === GLOBALS.PROJECT_TYPES.FRONT_END &&
            frontendProjects.map((project) => (
              <ProjectListsCard
                image={project.image}
                name={project.name}
                detail={project.detail}
                link={project.link}
                tools={project.tools}
                key={project.name}
              />
            ))}
          {activeTab === GLOBALS.PROJECT_TYPES.BACK_END &&
            backendProjects.map((project) => (
              <ProjectListsCard
                image={project.image}
                name={project.name}
                detail={project.detail}
                link={project.link}
                tools={project.tools}
                key={project.name}
              />
            ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
