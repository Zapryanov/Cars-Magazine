import React, { Component } from "react";

class Time extends Component {

    constructor(props) {
        super(props)

        this.state = {
            time: ""
        }
    }

    componentDidMount() {
        this.handleTimer()
    }

    handleTimer = () => {
        const currentdate = new Date();
        const datetime = "DATE: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear()

        this.setState({
            time: datetime
        })
    }

    render() {
        return (
            <div>{this.state.time}</div>
        )
    }
}

export default Time;