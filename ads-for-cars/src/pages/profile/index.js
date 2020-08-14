import React, { Component } from "react"
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import UserContext from "../../Context";
import Title from "../../components/title";
import Car from "../../components/car";
import { withRouter } from "react-router-dom";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            postsCount: 0,
            posts: null
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.userId);
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            this.props.history.push("/error")
        }
        const user = await response.json();

        this.setState({
            username: user.username,
            postsCount: user.posts && user.posts.length,
            posts: user.posts
        })
    }


    render() {
        const { username, postsCount, posts } = this.state;
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
}

export default withRouter(ProfilePage)

