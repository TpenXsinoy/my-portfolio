import React from "react";

import { Container, Section } from "elements";

import styles from "./styles.module.scss";
import { ContactCard, SectionHeader } from "components";

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

const Contact = () => (
  <Section className={styles.Contact}>
    <Container className={styles.Contact_container}>
      <SectionHeader title="CONTACT" id="contact" />
      <div className={styles.Contact_details}>
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

export default Contact;
