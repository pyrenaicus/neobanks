import Time from "../atoms/Time";
import PhoneVitals from "./PhoneVitals";

const PhoneStatus = () => {
  return (
    <div className="phone-status">
      <Time />
      <PhoneVitals />
    </div>
  );
};

export default PhoneStatus;
