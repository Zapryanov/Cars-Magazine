import React from "react";
import styles from "./index.module.css";

const Aside = () => {

    return (
        <aside>
            <div className={styles.eachSort}>
                <p className={styles.paragraphMargin}>
                    Sort cars by price:
                </p>
                <p className={`${styles.textIndent} ${styles.paragraphMargin}`}>
                     - descending-order
                </p>
                <button className={styles.btn}>Sort</button>
            </div>
            <div className={styles.eachSort}>
                <p className={styles.paragraphMargin}>
                    Sort cars by price:
                </p>
                <p className={`${styles.textIndent} ${styles.paragraphMargin}`}>
                    - ascending-order
                </p>
                <button className={styles.btn}>Sort</button>
            </div>
            <div className={styles.eachSort}>
                <p className={styles.paragraphMargin}>
                    Sort by last added
                </p>
                <button className={styles.btn}>Sort</button>
            </div>
        </aside>
    )
}

export default Aside;