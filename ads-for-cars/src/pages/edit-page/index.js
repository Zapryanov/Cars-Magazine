import React, { Component } from "react";
import PageLayout from "../../components/page-layout";
import Input from "../../components/input";
import styles from "../../pages/create-car/index.module.css";
import Title from "../../components/title";
import UserContext from "../../Context";
import SubmitButton from "../../components/button/submit-button";
import defaultImage from "../../public/car-logo-1.png";
import { withRouter } from "react-router-dom";

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

class EditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            price: 0,
            contact: "",
            imageUrl: "",
            author: ""
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

    componentDidMount() {
        this.getCar(this.props.match.params.id);
    }

    getCar = async (id) => {
        const response = await fetch(`http://localhost:9999/api/cars?id=${id}`);

        if (!response.ok) {
            console.log("Error from function GetCar in EditPage...!");
            this.props.history.push("/error")
        }

        const car = await response.json();

        this.setState({
            ...car
        })

    }

    postCar = async (e) => {
        e.preventDefault();

        const { description, price, contact, imageUrl, author } = this.state;
        const token = getCookie("x-auth-token");
        const id = this.props.match.params.id;

        try {
            const promise = await fetch(`http://localhost:9999/api/cars/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                    description,
                    price,
                    contact,
                    imageUrl: imageUrl || defaultImage,
                    author
                })
            })
    
            const response = await promise.json();
    
            if (response.ok === 1) {
                this.props.history.push("/");
            } else {
                this.props.history.push("/error");
            }
            
        } catch (err) {
            console.log("Error: ", err);
            this.props.history.push("/error");
        }


    }

    openWidget = () => {

        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'audipower',
                uploadPreset: 'softuni-1',
            },
            (error, result) => {
                if (result.event === 'success') {
                    this.setState({
                        imageUrl: result.info.url
                    })
                }
            },
        );
        widget.open();
    };


    render() {

        const {
            description,
            price,
            contact,
            imageUrl,
        } = this.state;

        return (
            <PageLayout>
                <Title title="Edit Page" />
                <div className={styles.container}>
                    <form onSubmit={this.handleUpoad}>
                        <p>
                            <SubmitButton title="Upoad Image" onClick={this.openWidget} />
                        </p>
                    </form>
                    <form onSubmit={(e) => this.postCar(e)}>
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
                        <Input
                            id="photo"
                            label="Photo"
                            value={imageUrl}
                            onChange={(e) => this.handlePrice(e, "imageUrl")}
                        />
                        <SubmitButton title="Update" />
                    </form>
                </div>

            </PageLayout>
        )
    }
}

export default withRouter(EditPage);