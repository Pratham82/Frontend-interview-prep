import { useReducer } from 'react'

export default function CounterWithReducer() {
  const counterReducer = (state, action: { type: string }) => {
    switch (action.type) {
      case 'increment': {
        return { count: state.count + 1 }
      }

      case 'decrement': {
        return { count: state.count - 1 }
      }
      default:
        return
    }
  }
  const initialState = {
    count: 0,
  }
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const onUpdateCounter = (type: string) => {
    dispatch({ type })
  }

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <h2>Counter With Reducer</h2>
      <h4>counter: {state?.count}</h4>

      <button onClick={() => onUpdateCounter('increment')}>Increment +</button>
      <button onClick={() => onUpdateCounter('decrement')}>Decrement -</button>
    </div>
  )
}
