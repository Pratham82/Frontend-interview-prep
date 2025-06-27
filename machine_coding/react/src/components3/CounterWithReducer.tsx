import { useReducer } from "react";

export default function CounterWithReducer() {
  type COUNTER_STATE = {
    count: number;
  };

  const enum COUNTER_ACTION {
    "INCREMENT",
    "DECREMENT",
    "RESET",
  }

  const initialState: COUNTER_STATE = {
    count: 0,
  };

  const reducer = (
    state: COUNTER_STATE,
    action: {
      type: COUNTER_ACTION;
    }
  ): COUNTER_STATE => {
    switch (action.type) {
      case COUNTER_ACTION.INCREMENT: {
        return {
          count: state.count + 1,
        };
        break;
      }

      case COUNTER_ACTION.DECREMENT: {
        return {
          count: state.count - 1,
        };
        break;
      }

      case COUNTER_ACTION.RESET: {
        return {
          count: 0,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () =>
    dispatch({
      type: COUNTER_ACTION.INCREMENT,
    });
  const handleDecrement = () => dispatch({ type: COUNTER_ACTION.DECREMENT });
  const handleReset = () => dispatch({ type: COUNTER_ACTION.RESET });

  return (
    <div>
      <h2>Counter with react reducer</h2>

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
            Count: {state?.count}
          </div>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
