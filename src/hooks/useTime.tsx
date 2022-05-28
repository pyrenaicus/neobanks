import { useState, useEffect } from "react";

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
