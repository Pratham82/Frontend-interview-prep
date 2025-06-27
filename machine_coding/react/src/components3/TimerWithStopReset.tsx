import { useEffect, useState } from "react";
import "./styles.css";

export default function TimerWithStopReset() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const [isPause, setPause] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const onReset = () => {
    setSec(0);
    setMin(0);
    setPause(false);
  };

  const onPauseToggle = () => {
    setPause(!isPause);
  };

  const onStart = () => {
    setIsStart(true);
  };

  const onStop = () => {
    setIsStart(false);
  };

  useEffect(() => {
    // const timerRef =
    if (isStart) {
      if (sec === 60) {
        setSec(0);
        setMin((min) => min + 1);
      }

      const timerInstance = setInterval(() => {
        if (isPause) {
          return;
        }
        if (!isPause) {
          setSec((sec) => sec + 1);
        }
      }, 1000);

      return () => clearInterval(timerInstance);
    }
  }, [sec, min, isPause, isStart]);

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>
        <span>
          {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onPauseToggle}>{isPause ? "Resume" : "Pause"}</button>
      </div>
    </div>
  );
}
