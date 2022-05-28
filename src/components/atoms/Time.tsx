import { useTime } from "../../hooks/useTime";
const Time = () => {
  // custom hook to retrieve current time
  const time = useTime();
  return <div className="phone-status-time">{time}</div>;
};

export default Time;
