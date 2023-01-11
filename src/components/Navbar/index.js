import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import cn from "classnames";
import GLOBALS from "app-globals";

import { Container, Icon, Text } from "elements";
import { textTypes } from "elements/constants";

import LogoName from "../../static/images/profiles/logo-name.png";

import styles from "./styles.module.scss";

const LINKS = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "resume",
    name: "Resume",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsScrolled(window.pageYOffset !== 0);
    });
  }, []);

  return (
    <>
      <nav
        className={[
          styles.Navbar,
          isScrolled ? styles.Navbar___scrolled : "",
        ].join(" ")}
      >
        <Container className={styles.Navbar_container}>
          <Link
            className={styles.Navbar_logo}
            to="hero"
            smooth
            offset={-200}
            duration={700}
          >
            <img
              src={LogoName}
              className={styles.Navbar_logo_img}
              alt="Logo"
              height={40}
            />
          </Link>

          {/* Desktop */}
          <div className={styles.Navbar_links}>
            {LINKS.map((link) => (
              <Link
                to={link.id}
                className={styles.Navbar_links_link}
                key={link.id}
                smooth
                offset={-200}
                duration={700}
              >
                <Text
                  className={cn(
                    styles.Navbar_links_link_text,
                    styles.Navbar_links_link_ltr
                  )}
                  colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL["0"]}
                  type={textTypes.HEADING.XS}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <Icon
            icon={"menu"}
            className={styles.Navbar_buttonIcon}
            onClick={() => setIsMobileMenuOpened(true)}
          />

          {isMobileMenuOpened && (
            <div className={styles.Navbar_mobileMenu}>
              <Icon
                icon={"close"}
                className={cn(styles.Navbar_mobileMenu_close)}
                onClick={() => setIsMobileMenuOpened(false)}
              />

              <div>
                {LINKS.map((link) => (
                  <Link
                    to={link.id}
                    className={styles.Navbar_links_link}
                    key={link.id}
                    onClick={() => setIsMobileMenuOpened(false)}
                  >
                    <Text
                      className={cn(
                        styles.Navbar_links_link_text,
                        styles.Navbar_links_link_ltr
                      )}
                      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL["0"]}
                      type={textTypes.HEADING.XS}
                    >
                      {link.name}
                    </Text>
                  </Link>
                ))}

                <div className={styles.Navbar_divider}></div>
              </div>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
