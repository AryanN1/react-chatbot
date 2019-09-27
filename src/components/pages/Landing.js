import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.header}>
      <h1>Find a great Web Dev course with the help of a chatbot!</h1>
      <h2> Welcome to my React Chatbot app! </h2>
      <br />
      <dt className={styles.textColor}> User can ask the Chatbot: </dt>
      <dd className={styles.textColor}>"recommend"</dd>
      <dd className={styles.textColor}>"recommendation"</dd>
      <dd className={styles.textColor}>"What are the best courses?"</dd>
      <dd className={styles.textColor}>"Recommend a course for me"</dd>
      <dd className={styles.textColor}>"Give me recommendations"</dd>
      <dd className={styles.textColor}>"Do you recommend anything?"</dd>
      <p className={styles.textColor}>
        {" "}
        The chatbot will give you a list of recommend courses.
      </p>
      <p className={styles.textColor}>
        If you ask for personal training and click "Yes", the chatbot will ask
        the user for their name, email, phone, and address.
      </p>
      <p className={styles.textColor}>
        Then, it'll capture the users info and store it in a database
      </p>
      <h3 className={styles.heading}>
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
        Try it out here{" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
      </h3>
      <h3 className={styles.arrow}>&#10551;</h3>
    </div>
  );
};
export default Landing;
