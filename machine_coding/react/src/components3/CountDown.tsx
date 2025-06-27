import { useEffect, useState } from "react";
import "./styles.css";
import TaskBoard from "./TaskBoard";

export default function CountDown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timerInstance = setInterval(() => {
      setCount((oldCount) => (oldCount === 0 ? 10 : oldCount - 1));
    }, 1000);

    console.log(count);

    return () => clearInterval(timerInstance);
  }, []);

  return (
    <div className="App">
      <h2>Current Count: {count}</h2>
    </div>
  );
}
