import React from "react";
import styles from "./index.module.css";
// import { Link } from "react-router-dom";

const LinkComponent = ({ title, href, type }) => {
    return (
        <li className={styles.listItem}>
            <a href={href} className={styles.colorLink}>
                {title}
            </a>
        </li>
    )
}

export default LinkComponent;