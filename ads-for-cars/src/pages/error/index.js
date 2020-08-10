import React from "react";
import styles from "./index.module.css";
import Title from "../../components/title";
import PageLayout from "../../components/page-layout";
import logo from "../../public/error-logo.png"

const ErrorPage = () => {
    return (
        <PageLayout>
            <div>
                <Title title="Error Page" />
                <p className={styles.wrapper}>
                    <img src={logo} alt="error" className={styles.position} />
                </p>
            </div>
        </PageLayout>
    )
}

export default ErrorPage;