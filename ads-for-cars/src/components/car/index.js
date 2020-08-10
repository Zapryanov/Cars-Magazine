import React from "react";
import styles from "./index.module.css";
import SubmitButton from "../button/submit-button";

const Car = ({ description, price, author }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.description}>
                <p>
                    {`${description.slice(0, 30)}..........`}
                </p>
                <p>
                    {`Price: €${price}`}
                </p>
                <p>
                    <SubmitButton title="Details"/>
                </p>
            </div>
        </div>
    )
}

export default Car;