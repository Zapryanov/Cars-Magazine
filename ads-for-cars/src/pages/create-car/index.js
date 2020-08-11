import React, { Component } from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Input from "../../components/input";
import UserContext from "../../Context";

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

class CreateCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            price: "",
            contact: ""
        }
    }

    static contextType = UserContext;

    handleTextarea = (event) => {
        this.setState({
            description: event.target.value 
        })
    }

    handlePrice = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    postCar = async (e) => {
        e.preventDefault();

        const { description, price, contact } = this.state;
        console.log(this.context)
        const token = getCookie("x-auth-token");
        try {
            const promise = await fetch("http://localhost:9999/api/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                    description,
                    price,
                    contact
                })
            })
            const response = await promise.json();

            if (response.description && response.price && response.contact) {
                this.props.history.push("/");
            }
        } catch (err) {
            console.log("Error from React: ", err);
        }
    }

    render() {
        const { description, price, contact } = this.state;

        return (
            <PageLayout>
                <Title title="Create an Add" />
                <div className={styles.container}>
                    <form onSubmit={this.postCar}>
                        <div>
                            <textarea value={description} onChange={this.handleTextarea} />
                        </div>
                        <Input 
                            id="price" 
                            label="Price" 
                            value={price} 
                            onChange={(e) => this.handlePrice(e, "price")} 
                        />
                        <Input 
                            id="contact" 
                            label="Contact" 
                            value={contact} 
                            onChange={(e) => this.handlePrice(e, "contact")} 
                        />
                        <SubmitButton title="Create"/>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default CreateCar;