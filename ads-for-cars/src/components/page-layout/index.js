import React from 'react';
import Header from "../header"
import styles from "./index.module.css";
import Footer from '../footer';
import Time from '../time';

function PageLayout(props) {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.time}>
            <Time />
          </div>
            {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout