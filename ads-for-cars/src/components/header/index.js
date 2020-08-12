import React, { Component } from "react";
import styles from "./index.module.css";
import Link from "../link";
import logo from "../../public/car-logo.png";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";


class Header extends Component {

    static contextType = UserContext;

    render() {
        const { loggedIn, user } = this.context;

        const consumer = loggedIn ? user.username : "Guest";
        // console.log(consumer)

        const links = getNavigation(loggedIn, user && user.id);
    
        return (
            <header className={styles.navigation}>
                <div className={styles.wrapHeader}>
                    <div className={styles.wrapImg}>
                        <img src={logo} className={styles.img} alt="logo" />
                    </div>
                    <div className={styles.wrapUl}>
                        <ul>
                            {
                                links.map((linkNav, index) => {
                                    return (
                                        <Link key={index} href={linkNav.link} title={linkNav.title} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.wrapTextUser}>
                        <p className={styles.controlText}>
                            User: {consumer}
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;