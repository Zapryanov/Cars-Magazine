import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const LinkComponent = ({ title, href }) => {
    return (
        <li className={styles.listItem}>
            <Link to={href} className={styles.colorLink}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;