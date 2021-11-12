import React from "react";
import styles from "./About.module.css";

export default function About(text) {
  return (
    <div className={styles.container}>
      <p>Hello! 😁 I'm Carlos Ramirez</p>
      <p>
        This is my very first app build with React for the FullStack Web
        Development Bootcamp SoyHenry 🚀, it consumes data from OpenWeather API
      </p>
      <p>If you want to contact me my social links are below 👇</p>
    </div>
  );
}
