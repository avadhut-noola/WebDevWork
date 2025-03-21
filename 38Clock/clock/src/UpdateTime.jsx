import React from "react";
import { useState } from "react";

const UpdateTime = () => {
    const [time, setTime] = useState("");

    const getTime = () => {
        const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        });
        setTime(currentTime);
    }

    return (
        <div>
        <h1>{time}</h1>

        <button onClick={getTime}>Get Time</button>
        </div>
    );
};

export default UpdateTime;
