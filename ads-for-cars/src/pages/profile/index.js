import React, { useState, useEffect } from "react"
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import Title from "../../components/title";
import Car from "../../components/car";
import { withRouter, useRouteMatch, useHistory } from "react-router-dom";

const ProfilePage = (props) => {

    const [state, setState] = useState({
        username: null,
        postsCount: 0,
        posts: null
    })

    const match = useRouteMatch();
    const history = useHistory();

    const getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push("/error")
        }
        const user = await response.json();

        setState({
            username: user.username,
            postsCount: user.posts && user.posts.length,
            posts: user.posts
        })
    }

    useEffect(() => {
        getUser(match.params.userId);
    })

    const { username, postsCount, posts } = state;
    const cars = posts && posts.map(car => <Car key={car._id} {...car} />);

    return (
        <PageLayout>
            <Title title="Profile Page" />
            <div className={styles.container}>
                <div>
                    <p>
                        <span className={styles.boldText}>User: </span>
                        <span className={styles.shadowTitle}>{username}</span>
                    </p>
                    <p>
                        <span className={styles.boldText}>Posts: </span>
                        <span className={styles.price}>{postsCount}</span>
                    </p>
                </div>
                {cars}
            </div>
        </PageLayout>
    )

}

export default withRouter(ProfilePage)

