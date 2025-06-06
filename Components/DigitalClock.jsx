import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(
        seconds
        )} ${meridiem}`;
    }

    function formatDate() {
        const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ];
        const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        ];
        const dayName = days[time.getDay()];
        const monthName = months[time.getMonth()];
        const date = time.getDate();
        const year = time.getFullYear();
        return `${dayName}, ${monthName} ${padZero(date)}, ${year}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <h1>Digital Clock App</h1>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
        <div className="date">
            <span>{formatDate()}</span>
        </div>
        </div>
    );
}

export default DigitalClock;
