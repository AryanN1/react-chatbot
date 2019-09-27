import React from "react";
import ItemList from "./ItemList";
import styles from "./Shop.module.css";

const Shop = () => (
  <div>
    <h1 className={styles.heading}>Shop for Courses</h1>
    <h2 className={styles.headingTwo}>
      Take a look at the courses you can purchase, or ask the chatbot
      <span role="img" aria-label="robot">&#129302;</span>
    </h2>
    <br />
    <ItemList />
  </div>
);

export default Shop;
