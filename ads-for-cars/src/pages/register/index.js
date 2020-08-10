import React, { Component } from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";
import UserContext from "../../Context";

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            errorUsername: "",
            password: "",
            rePassword: "",
            errorPasswords: ""
        }
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password, rePassword } = this.state;

        if (username.length < 3 || (password !== rePassword)) {
            if (username.length < 3) {
                this.setState({
                    errorUsername: `Username must be at least 3 characters long. You have only ${username.length} symbols...!!!`
                })
            }
            if (password !== rePassword) {
                this.setState({
                    errorPasswords: `Password and Re-Password must be the same. You have password: ${password} and Re-Password: ${rePassword}...!!!`
                })
            }
            return
        }

        try {
            const promise = await fetch("http://localhost:9999/api/user/register", {
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
                this.context.logIn(response.username);
                this.context.id = response._id;
                this.props.history.push("/");
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { username, password, rePassword } = this.state;

        return (
            <PageLayout>
                <form onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input
                        id="username"
                        label="Username"
                        value={username}
                        onChange={(e) => this.onChange(e, "username")}
                    />
                    <div className={styles.errorMsg}>{this.state.errorUsername}</div>
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => this.onChange(e, "password")}
                    />
                    <Input
                        type="password"
                        id="re-password"
                        label="Re-Password"
                        value={rePassword}
                        onChange={(e) => this.onChange(e, "rePassword")}
                    />
                    <div className={styles.errorMsg}>{this.state.errorPasswords}</div>
                    <div className={styles.center}>
                        <SubmitButton title="Register" />
                    </div>
                </form>
            </PageLayout>
        )
    }

}

export default RegisterPage;