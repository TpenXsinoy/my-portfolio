import React from "react";

import cn from "classnames";

import GLOBALS from "app-globals";

import { useInView } from "react-intersection-observer";
import { useWindowSize } from "hooks";
import { ResumeInfo, SectionHeader } from "components";
import { Container, Section } from "elements";
import myInformation from "./constants/myInformation";

import styles from "./styles.module.scss";

const Resume = () => {
  const { ref: myRef, inView: isResumeVisible } = useInView({
    triggerOnce: true,
  });

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
      <Container
        className={cn(
          styles.Resume_container,
          isResumeVisible && styles.Resume___animate
        )}
        ref={myRef}
      >
        <SectionHeader
          title="RESUME"
          subInfo={GLOBALS.SUB_INFO.RESUME}
          id="resume"
        />

        <div
          className={cn(
            styles.Resume_information,
            isResumeVisible && styles.Resume___animateDivs
          )}
        >
          {myInformation.map((info) => (
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
