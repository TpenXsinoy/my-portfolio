import React from "react";

import cn from "classnames";

import { useInView } from "react-intersection-observer";
import { Container, Section } from "elements";
import { ContactCard, SectionHeader } from "components";

import styles from "./styles.module.scss";

const ContactInfo = [
  {
    icon: "location_on",
    name: "My Address",
    detail: "Leo’s Ville, Sitio Letmon, Brgy. Dumlog, Taslisay City, Cebu",
    hasSocials: false,
  },
  {
    icon: "share",
    name: "Social Profiles",
    detail: null,
    hasSocials: true,
  },
  {
    icon: "email",
    name: "Email Me",
    detail: "stephine.n.sinoy@gmail.com",
    hasSocials: false,
  },
  {
    icon: "call",
    name: "Call Me",
    detail: "+63 906 0264 692",
    hasSocials: false,
  },
];

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
          {ContactInfo.map((info) => (
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
