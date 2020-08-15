import React from "react";
import styles from "./index.module.css";
import SubmitButton from "../button/submit-button";

const SortingComponent = ({titleSort, bodySort, sortFunction}) => {

    return (
        <div className={styles.eachSort}>
            <p className={styles.paragraphMargin}>
                {titleSort}
                </p>
            <p className={`${styles.textIndent} ${styles.paragraphMargin}`}>
                - {bodySort}
                </p>
            <SubmitButton title="sort" onClick={sortFunction} />
        </div>
    )
}

export default SortingComponent;