import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => (
  <nav className={styles.nav} >
    <div className={styles.nav}>
      <Link to={"/"} className="brand-logo hide-on-small-only">
        Web Development Courses
      </Link>
      <ul id="nav-mobile" className="right">
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>About Chatbot</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
