import React, { useState } from "react";

import PropTypes from "prop-types";

import GLOBALS from "app-globals";

import CodechumModal from "components/CodechumModal";
import { ButtonLink, Card, Modal, Text } from "elements";
import { buttonTypes, textTypes } from "elements/constants";

import styles from "./styles.module.scss";

const ProjectListsCard = ({ image, name, detail, link }) => {
  const [isCodechumModalOpen, setIsCodechumModalOpen] = useState(false);
  return (
    <>
      {/* <CodechumModal
        isOpen={isCodechumModalOpen}
        onClose={() => setIsCodechumModalOpen(false)}
      /> */}
      <Modal
        isOpen={isCodechumModalOpen}
        handleClose={() => setIsCodechumModalOpen(false)}
      />
      <Card className={styles.ProjectListsCard}>
        <img className={styles.ProjectListsCard_image} src={image} alt={name} />

        <Text
          className={styles.ProjectListsCard_title}
          colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
          type={textTypes.HEADING.SM}
        >
          {name}
        </Text>
        <Text className={styles.ProjectListsCard_detail}>{detail}</Text>
        <ButtonLink
          to={link ? link : ""}
          className={styles.ProjectListsCard_button}
          type={buttonTypes.SECONDARY.GREEN}
          onClick={() => {
            !link && setIsCodechumModalOpen(true);
          }}
        >
          <Text type={textTypes.HEADING.XXXS}>Checkout Website</Text>
        </ButtonLink>
      </Card>
    </>
  );
};

ProjectListsCard.defaultProps = {
  link: null,
};

ProjectListsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectListsCard;
