import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.header}>
      <h1>Find a great Web Dev course with the help of a chatbot!</h1>
      <h2> Welcome to my React Chatbot app! </h2>
      <br/>
      <h3 className={styles.heading}>
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
        Try it out here{" "}
        <span role="img" aria-label="robot">
          &#129302;
        </span>{" "}
      </h3>
      <h3 className={styles.arrow}>&#8690;</h3>
      <dt className={styles.textInfo}> User can ask the Chatbot: </dt>
      <dd className={styles.textInfo}>"recommend"</dd>
      <dd className={styles.textInfo}>"recommendation"</dd>
      <dd className={styles.textInfo}>"What are the best courses?"</dd>
      <dd className={styles.textInfo}>"Recommend a course for me"</dd>
      <dd className={styles.textInfo}>"Give me recommendations"</dd>
      <dd className={styles.textInfo}>"Do you recommend anything?"</dd>
      <p className={styles.textInfo}>
        The chatbot will give you a list of recommend courses. < br />
        If the user asks
        for personal training and click "Yes", < br />
        the chatbot will ask
        the user
        for their name, email, < br /> phone, and address, 
        then, it'll capture the users info and store it in a database
      </p>
    </div>
  );
};
export default Landing;
