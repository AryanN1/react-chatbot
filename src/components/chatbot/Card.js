import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return  (
  <div className={styles.divStyle}>
    <div className="card">
    <span className={styles.cardTitle}>
          {props.payload.fields.header.stringValue}</span>
      <div className="card-image">
        <img className={styles.cardImage} alt={props.payload.fields.header.stringValue} 
        src={props.payload.fields.image.stringValue}/>
      </div>
      <br/>
      <div className={styles.cardContent}>
        {props.payload.fields.description.stringValue}
        <p><a href='/'>{props.payload.fields.price.stringValue}</a></p>
      </div>
      <div className={styles.cardAction}>
        <a className={styles.aTextColor} target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>Buy Now</a>
      </div>
    </div>
  </div>
)};

export default Card;