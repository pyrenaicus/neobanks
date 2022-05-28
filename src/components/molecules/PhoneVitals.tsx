import IconBattery from "../atoms/IconBattery";
import IconSignal from "../atoms/IconSignal";
import IconWifi from "../atoms/IconWifi";

const PhoneVitals = () => {
  return (
    <div className="phone-vitals">
      <IconSignal />
      <IconWifi />
      <IconBattery />
    </div>
  );
};

export default PhoneVitals;
