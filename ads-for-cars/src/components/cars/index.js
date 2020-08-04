import React, { Component } from "react";
import styles from "./index.module.css";

class Cars extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.title}>Cars</h1>
            </div>
        )
    }
}

export default Cars;