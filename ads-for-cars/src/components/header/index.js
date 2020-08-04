import React from "react";
import styles from "./index.module.css";
import Link from "../link";
import logo from "../../public/car-logo.png";

const Header = () => {

    return (
        <header className={styles.navigation}>
            <div className={styles.wrapHeader}>
                <div className={styles.wrapImg}>
                    <img src={logo} className={styles.img} alt="logo" />
                </div>
                <div className={styles.wrapUl}>
                    <ul>
                        <Link href="#" title="About Us" />
                        <Link href="#" title="All Cars" />
                        <Link href="#" title="Create Car" />
                        <Link href="#" title="Login" />
                        <Link href="#" title="Register" />
                        <Link href="#" title="Profile" />
                        <Link href="#" title="Contact Us" />
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;