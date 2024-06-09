import { useState } from 'react'

export default function Comp10() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Comp10</h1>
      <button onClick={increment}>Increment</button>
      <h3>Value: {count}</h3>
    </div>
  )
}
