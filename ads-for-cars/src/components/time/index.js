import React, { useState, useEffect } from "react";

const Time = () => {
    
    const [time, setState] = useState("");

    const handleTimer = () => {
        const currentdate = new Date();
        const datetime = "DATE: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear()

        setState(datetime)
    }

    useEffect(() => {
        handleTimer();
    }, [])

    return (
        <div>{time}</div>
    )
}

export default Time;
