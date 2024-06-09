import { useState } from 'react'

export default function Comp5() {
  const [state, setState] = useState({ count: 0 })

  const incrementCount = () => {
    setState(prevState => ({ count: prevState.count + 1 }))
    setState(prevState => ({ count: prevState.count + 1 }))
  }

  return (
    <div>
      <h1>Comp5</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <h3>Count: {state.count}</h3>
    </div>
  )
}
