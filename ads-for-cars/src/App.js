import React, { Component } from "react";
import UserContext from "./Context";
import styles from "./app.module.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: null,
            user: null
        }
    }

    static contextType = UserContext;

    getCookie = (name) => {
        const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookieValue ? cookieValue[2] : null;
    }

    deleteCookie = (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        });
    }

    logOut = () => {
        this.deleteCookie("x-auth-token");
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    componentDidMount() {
        const token = this.getCookie("x-auth-token");

        if (!token) {
            this.logOut();
            return
        }

        fetch("http://localhost:9999/api/user/verify", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(promise => {
            return promise.json();
        }).then(response => {
            if (response.status) {
                this.logIn({
                    username: response.user.username,
                    id: response.user._id
                });
            } else {
                this.logOut();
            }
        })
    }

    render() {
        const { loggedIn, user } = this.state;

        if (loggedIn === null) {
            return (
                <div className={styles.container}>
                    <div className={styles.wrapLoading}>
                        <div className={styles.loading}></div>
                        <p className={styles.textLoading}>Loading.....</p>
                    </div>
                </div>
            )
        }

        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}

            </UserContext.Provider>
        )
    }
}

export default App;