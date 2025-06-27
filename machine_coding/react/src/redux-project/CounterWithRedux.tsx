import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  increment,
  decrement,
  reset,
} from "../redux-project/features/counterSlice";

export default function CounterWithRedux() {
  const count = useSelector((state: RootState) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div>
      <h2>Counter with react redux</h2>

      <div
        style={{
          margin: "0 auto",
          padding: "4px",
          width: "250px",
          height: "250px",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "30px",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <button onClick={handleDecrement}>-</button>
          <div
            style={{
              padding: "10px",
            }}
          >
            Count: {count}
          </div>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
