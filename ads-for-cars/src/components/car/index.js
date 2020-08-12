import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Car = ({ description, price, imageUrl, _id }) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt="car"/>
            <div className={styles.description}>
                <p>
                    {`${description.slice(0, 30)}..........`}
                </p>
                <p>
                    {`Price: €${price}`}
                </p>
                <p>
                    <Link className={styles.btn} to={`/details/${_id}`}>Details</Link>
                </p>
            </div>
        </div>
    )
}

export default Car;