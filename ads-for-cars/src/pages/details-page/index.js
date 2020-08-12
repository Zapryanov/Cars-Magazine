import React, { Component } from "react";
import UserContext from "../../Context";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

class DetailsPage extends Component {
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

    componentDidMount() {
        this.getCar(this.props.match.params.imgId);
    }

    getCar = async (id) => {
        const response = await fetch(`http://localhost:9999/api/cars?id=${id}`);

        if (!response.ok) {
            this.props.history.push("/error")
        }
        const car = await response.json();

        this.setState({
            ...car
        })
    }

    deleteAd = async (e) => {
        e.preventDefault();

        const token = getCookie("x-auth-token");

        const id = this.props.match.params.imgId;
        const response = await fetch(`http://localhost:9999/api/cars/${id}?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        if (response.ok) {

            this.props.history.push("/");
        } else {
            console.log(response)
        }

    }

    render() {

        const {
            description,
            price,
            contact,
            imageUrl,
            author
        } = this.state;

        const isCreator = author._id === this.context.user.id;

        return (
            <PageLayout>
                <div className={styles.containerPage}>
                    <div className={styles.wrapImage}>
                        <img src={imageUrl} alt="car" className={styles.img} />
                        <div className={styles.textDiv}>
                            <span className={styles.boldText}>Description: </span>
                            {description}
                        </div>
                        <div className={styles.textDiv}>
                            <span className={styles.boldText}>Mobile phone: </span>
                            {contact}
                        </div>
                        <div className={styles.textDiv}>
                            <span className={styles.boldText}>Price: </span>
                            €<span className={styles.price}>{price}</span>
                        </div>
                        <div>{isCreator ?
                            <p className={styles.wrapButtons}>
                                <button className={styles.btn} onClick={(e) => this.deleteAd(e)}>Delete</button>
                                <button className={styles.btn}>Edit</button>
                            </p>
                            : null
                        }</div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default DetailsPage;

//{ timestamps: true }