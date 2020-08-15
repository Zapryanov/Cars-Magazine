import React from "react";
import styles from "./index.module.css";
import SortingComponent from "../sorting-component";

const Aside = ({sortAscending, sortDescending, sortAlphabetically}) => {

    return (
        <div className={styles.aside}>
            <SortingComponent titleSort="Sort cars by price:" bodySort="descending-order" sortFunction={sortDescending} />
            <SortingComponent titleSort="Sort cars by price:" bodySort="ascending-order" sortFunction={sortAscending} />
            <SortingComponent titleSort="Sort alphabetically:" bodySort="ascending-order" sortFunction={sortAlphabetically} />
        </div>
    )
}

export default Aside;