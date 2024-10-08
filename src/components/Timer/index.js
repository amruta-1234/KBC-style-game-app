import { useState, useEffect } from "react";
import { TimerCard, TimerText } from "./styledComponents";

const Timer = (questionNo, setTimeOut) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setTimeOut(true);
    }
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNo]);

  return (
    <TimerCard>
      <TimerText>{timer}</TimerText>
    </TimerCard>
  );
};

export default Timer;
