import React, { Component } from "react";
import UserContext from "./Context";

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
        console.log("Token : ", token)

        if (!token) {
            this.logOut();
            return
        }

        fetch("http://localhost:9999/api/user/verify", {
            method: "GET",
            // body: JSON.stringify({
            //     token
            // }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(promise => {
            console.log(promise);
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