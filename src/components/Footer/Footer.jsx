import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoFolderOpenOutline,
} from "react-icons/io5";

function Footer({ portfolio, github, linkedin }) {
  return (
    <div className={styles.footer}>
      <Link to="/about" className={styles.about}>
        <span>About me</span>
      </Link>
      <div className={styles.redes}>
        <a
          href={github}
          className={styles.iconos}
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub />
        </a>
        <a
          href={linkedin}
          className={styles.iconos}
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href={portfolio}
          className={styles.iconos}
          target="_blank"
          rel="noreferrer"
        >
          <IoFolderOpenOutline />
        </a>
      </div>
    </div>
  );
}

export default Footer;
