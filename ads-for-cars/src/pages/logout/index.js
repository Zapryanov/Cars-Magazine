import React from "react";
import UserContext from "../../Context";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";

class Logout extends React.Component {

    static contextType = UserContext;

    logOut = () => {
        this.context.logOut();
        this.props.history.push("/")
    }

    componentDidMount() {
        this.logOut();

    }

    render() {
        
        return (
            <PageLayout>
                <div className={styles.textLoading}>Loading...</div>
            </PageLayout>
        )
    }
}

export default Logout;