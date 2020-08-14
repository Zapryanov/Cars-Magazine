import React from "react";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import styles from "./index.module.css";

const ContactsPage = () => {

    return (
        <PageLayout>
            <Title title="Contacts" />
            <div className={styles.container}>
                <p>
                    Some mobile phones, address and Google-Maps maybe...:)
                </p>
                <p>
                    
                </p>
            </div>
        </PageLayout>
    )
}

export default ContactsPage;