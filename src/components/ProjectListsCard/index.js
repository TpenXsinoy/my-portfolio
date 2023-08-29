import React, { useState } from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import GLOBALS from "app-globals";

import CodechumModal from "components/CodechumModal";
import { Card, Text } from "elements";
import { textTypes } from "elements/constants";

import styles from "./styles.module.scss";

const ProjectListsCard = ({ image, name, detail, link, tools }) => {
  const [isCodechumModalOpen, setIsCodechumModalOpen] = useState(false);
  return (
    <>
      <CodechumModal
        isOpen={isCodechumModalOpen}
        onClose={() => setIsCodechumModalOpen(false)}
      />

      <Card
        className={styles.ProjectListsCard}
        onClick={() => {
          link ? window.open(link, "_blank") : setIsCodechumModalOpen(true);
        }}
      >
        <img className={styles.ProjectListsCard_image} src={image} alt={name} />

        <Text
          className={styles.ProjectListsCard_title}
          colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
          type={textTypes.HEADING.SM}
        >
          {name}
        </Text>

        <div className={styles.ProjectListsCard_details}>
          <Text className={styles.ProjectListsCard_detail}>{detail}</Text>

          {tools && (
            <div className={styles.ProjectListsCard_tools}>
              {tools.map((tool) => (
                <div
                  className={cn(
                    styles.ProjectListsCard_tools_tool,
                    styles[`ProjectListsCard___${tool.color}`]
                  )}
                  key={tool.name}
                >
                  <Text>{tool.name}</Text>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

ProjectListsCard.defaultProps = {
  link: null,
  tools: null,
};

ProjectListsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default ProjectListsCard;
