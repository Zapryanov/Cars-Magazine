import React from 'react';
import Header from "./components/header"
import Aside from './components/aside';
import styles from "./app.module.css";
import Cars from './components/cars';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Cars />
      </div>
    </div>
  );
}

export default App;
