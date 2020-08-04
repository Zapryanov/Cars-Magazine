import React from "react";
import styles from "./index.module.css";

const Aside = () => {

    return (
        <aside>
            <div className={styles.eachSort}>
                <p>
                    Sort cars by price: descending-order
                </p>
                <button>Sort</button>
            </div>
            <div className={styles.eachSort}>
                <p>
                     Sort cars by price: ascending-order
                </p>
                <button>Sort</button>
            </div>
            <div className={styles.eachSort}>
                <p>
                    Sort by last added
                </p>
                <button>Sort</button>
            </div>
        </aside>
    )
}

export default Aside;