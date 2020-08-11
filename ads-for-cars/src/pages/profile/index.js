import React, { Component } from "react"
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import UserContext from "../../Context";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
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
            posts: user.posts && user.posts.length
        })
    }

    render() {
        const { username, posts } = this.state;

        if (!username) {
            return (
                <PageLayout>
                    <div className={styles.loadingText}>Loading....</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                    <p>Profile</p>
                    <p>user: {username}</p>
                    <p>Posts: {posts}</p>
                </div>
            </PageLayout>
        )
    }
}

export default ProfilePage

