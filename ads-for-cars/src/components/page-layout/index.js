import React from 'react';
import Header from "../header"
import styles from "./index.module.css";
// import Aside from '../aside';
import Footer from '../footer';

function PageLayout(props) {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        {/* <Aside /> */}
        <div className={styles.main}>
            {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout