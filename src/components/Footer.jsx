import React from 'react';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Footer({instagram, github, linkedin}) {
  return (
    <div className={styles.footer}>
      <Link to="/about" className={styles.about}>
       <span>About me</span>
      </Link>
      <div className={styles.redes}>
        <a href={instagram} className={styles.iconos} target="_blank" rel="noreferrer"><IoLogoInstagram/></a>
        <a href={github} className={styles.iconos} target="_blank" rel="noreferrer"><IoLogoGithub/></a>
        <a href={linkedin} className={styles.iconos} target="_blank" rel="noreferrer"><IoLogoLinkedin/></a>
      </div>
    </div>
  );
};

export default Footer;