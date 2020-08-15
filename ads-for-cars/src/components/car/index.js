import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Car = ({ modelName, description, price, imageUrl, _id }) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt="car"/>
            <div className={styles.descriptionContainer}>
                <p>
                    <span className={styles.title}>Model: </span>
                    <span className={styles.textDescription}>{modelName}</span>
                </p>
                <p>
                    <span className={styles.title}>Description: </span>
                    <span className={styles.textDescription}>{`${description.slice(0, 30)}..........`}</span>
                </p>
                <p>
                    <span className={styles.title}>Price: </span>
                    <span>€ </span>
                    <span className={styles.price}>{price}</span>
                </p>
                <p>
                    <Link className={styles.btn} to={`/details/${_id}`}>Details</Link>
                </p>
            </div>
        </div>
    )
}

export default Car;