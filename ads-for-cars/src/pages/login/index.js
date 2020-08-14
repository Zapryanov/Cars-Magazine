import React, { Component } from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";
import UserContext from "../../Context";
import { Link, withRouter } from "react-router-dom";


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errorMsg: ""
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        if (username.length < 3) {
            this.setState({
                errorMsg: `Your username must be at leats 3 characters long. You have only ${username.length} characters...!!!`
            })
        }

        try {
            const promise = await fetch("http://localhost:9999/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            
            const authToken = promise.headers.get("Authorization");
            document.cookie = `x-auth-token=${authToken}`;
            const response = await promise.json();

            if (response.username && authToken) {
                this.context.logIn({username: response.username, id: response._id});
                // this.context.id = response._id;
                this.props.history.push("/");
            }
        } catch (err) {
            this.setState({
                errorMsg: "Username or Password is incorrect!!!"
            })
            console.log(err);
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <PageLayout>
                <form onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input
                        id="username"
                        label="Username"
                        value={username}
                        onChange={(e) => this.handleChange(e, "username")}
                    />
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => this.handleChange(e, "password")}
                    />
                    <div className={styles.center}>
                        <div>
                            <span className={styles.styleTextInfo}>If you haven't account, then just go to </span>
                            <Link to="/register" className={styles.styleLogin}>Register</Link>
                        </div>
                        <SubmitButton title="Login" />
                    </div>
                    <p className={styles.errorMsg}>{this.state.errorMsg}</p>
                </form>
            </PageLayout>
        )
    }

}

export default withRouter(LoginPage);