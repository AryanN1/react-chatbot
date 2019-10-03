import React from "react";
import styles from "../shop/ItemList.module.css";

const ItemList = () => (
  <div className={styles.courseList}>
    <div className={styles.card}>
      <div className="col s1 m1 l1">
        <div className="card">
          <span className={styles.cardTitle}>Scratch the Cat</span>
          <div className="card-image">
            <img
              className={styles.cardImage}
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/830298_f8f8_4.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>
              A fun guide to programming for kids, teens or adults who want to
              help kids learn to code.
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/scratch-game-programming/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s2 m2 l2">
        <div className="card">
          <span className={styles.cardTitle}>HTML and CSS</span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/246154_d8b0_3.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>
              Launch a career as a web designer. Learning HTML, CSS, responsive
              design, Sass, and more
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s3 m3 l3">
        <div className="card">
          <span className={styles.cardTitle}>Web Dev Bootcamp</span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/625204_436a_2.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>*Chatbot recommended*</p>
            <p className={styles.textAlign}>
              The only course you need to learn: HTML, CSS, JavaScript, Node,
              and More!
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s4 m4 l4">
        <div className="card">
          <span className={styles.cardTitle}>Full Stack Web Dev</span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/1042110_ffc3_4.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>
              Learn web development with HTML, CSS, Bootstrap 4, ES6 React and
              Node
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/ultimate-web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card}>
      <div className="col s5 m5 l5">
        <div className="card">
          <span className={styles.cardTitle}>MySQL Bootcamp </span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/1187016_51b3.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>*Chatbot recommended*</p>
            <p className={styles.textAlign}>
              Become an In-demand SQL Master by creating complex databases and
              building reports through real-world projects
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s6 m6 l6">
        <div className="card">
          <span className={styles.cardTitle}>React - The Complete Guide </span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/1362070_b9a1_2.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>
              Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks,
              Redux, React Routing, Animations, Next.js and way more!
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s7 m7 l7">
        <div className="card">
          <span className={styles.cardTitle}>
            The Complete Android N Developer Course
          </span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/951618_0839_2.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>
              Learn Android App Development with Android 7 Nougat by building
              real apps including Uber, Whatsapp and Instagram!
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/complete-android-n-developer-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className="col s8 m8 l8">
        <div className="card">
          <span className={styles.cardTitle}>
            The Complete iOS 13 Developer Course
          </span>
          <div className="card-image">
            <img
              alt="course-artwork"
              src="https://i.udemycdn.com/course/480x270/2460442_4106_2.jpg"
            />
          </div>
          <div className="card-content">
            <p className={styles.textAlign}>*Chatbot recommended*</p>
            <p className={styles.textAlign}>
              Learn iOS 13 development with Swift 5. Build apps, games and learn
              SwiftUI with Xcode 11.
            </p>
          </div>
          <div className={styles.cardAction}>
            <a
              className={styles.buyCourse}
              href="https://www.udemy.com/course/the-complete-ios-developer-course-with-swift/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              BUY THIS COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ItemList;
