import React from 'react';
import Header from "../header"
import styles from "./index.module.css";
import Footer from '../footer';

function PageLayout(props) {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
            {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout