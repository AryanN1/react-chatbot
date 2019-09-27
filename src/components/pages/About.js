import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <h1 className={styles.appHeader}>About Chatty the Chatbot!</h1>
      <p className={styles.aboutText}>
        {" "}
        The purpose of this app is to create a demo Chatbot that people can use
        it to tweak and suit their needs
      </p>
      <dt className={styles.techStack}>
        Technologies used to create this Chatbot include:
      </dt>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
        React
      </dd>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
        Node{" "}
      </dd>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>
        Express
      </dd>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>
        Postgres to capture user input
      </dd>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>
        Materalize CSS for the styling
      </dd>
      <dd className={styles.listItem}>
        {" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>
        Dialog Flow for natural language processing (NLP) and natural language
        undersanding (NLU)
      </dd>
    </div>
  );
};
export default About;
