import React, { useState, useEffect } from "react";

const UpdateTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(currentTime);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default UpdateTime;
