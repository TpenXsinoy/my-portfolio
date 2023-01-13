import React from "react";

import cn from "classnames";

import { useInView } from "react-intersection-observer";
import { Container, Section } from "elements";
import { ContactCard, SectionHeader } from "components";
import contactInfo from "./constants/contactInfo";

import styles from "./styles.module.scss";

const Contact = () => {
  const { ref: contactRef, inView: isContactVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <Section className={styles.Contact} id="contact">
      <Container className={styles.Contact_container} ref={contactRef}>
        <SectionHeader title="CONTACT" id="contact" />
        <div
          className={cn(
            styles.Contact_details,
            isContactVisible && styles.Contact___animate
          )}
        >
          {contactInfo.map((info) => (
            <ContactCard
              icon={info.icon}
              name={info.name}
              detail={info.detail}
              hasSocials={info.hasSocials}
              key={info.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
