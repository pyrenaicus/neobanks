import { useState } from "react";
const Time = () => {
  const date = new Date();
  const [time, setTime] = useState(
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  return <div className="phone-status-time">{time}</div>;
};

export default Time;
