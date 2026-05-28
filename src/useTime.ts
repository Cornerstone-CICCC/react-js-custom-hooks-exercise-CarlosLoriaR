import { useState, useEffect } from "react";

type TimeType = "hour" | "day";

export function useTime<T = string>(type: TimeType): T {
  const [value, setValue] = useState<T>(() => getTimeValue(type) as T);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(getTimeValue(type) as T);
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return value;
}

function getTimeValue(type: TimeType): string {
  const now = new Date();

  if (type === "day") {
    return now.toLocaleDateString("en-US", { weekday: "long" });
  }

  if (type === "hour") {
    return String(now.getHours()).padStart(2, "0");
  }

  throw new Error(`Invalid time type: ${type}`);
}
