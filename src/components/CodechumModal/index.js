import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ButtonLink, Modal, Text } from "elements";
import { textTypes } from "elements/constants";

import image1 from "../../static/images/projects/image1.webp";
import image2 from "../../static/images/projects/image2.webp";
import image3 from "../../static/images/projects/image3.webp";
import image4 from "../../static/images/projects/image4.webp";
import image5 from "../../static/images/projects/image5.webp";
import image6 from "../../static/images/projects/image6.webp";
import image7 from "../../static/images/projects/image7.webp";
import image8 from "../../static/images/projects/image8.webp";
import image9 from "../../static/images/projects/image9.webp";
import image10 from "../../static/images/projects/image10.webp";
import image11 from "../../static/images/projects/image11.webp";
import image12 from "../../static/images/projects/image12.webp";
import image13 from "../../static/images/projects/image13.webp";

import styles from "./styles.module.scss";

const CodechumModal = ({ isOpen, onClose }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <Modal className={styles.Modal} isOpen={isOpen} handleClose={onClose}>
      <div className={styles.Modal_header}>
        <Text className={styles.Modal_heading} type={textTypes.HEADING.LG}>
          Codechum Landing Page
        </Text>
        <Text className={styles.Modal_heading_helper}>
          My works on their landing page
        </Text>
      </div>

      <Slider {...sliderSettings}>
        {images.map((image) => (
          <img
            src={image}
            className={styles.Modal_image}
            alt="Logo"
            key={image}
          />
        ))}
      </Slider>
      <ButtonLink to="https://codechum.com/" className={styles.Modal_button}>
        <Text type={textTypes.HEADING.XXXS}>Visit Website</Text>
      </ButtonLink>
    </Modal>
  );
};

CodechumModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CodechumModal;
