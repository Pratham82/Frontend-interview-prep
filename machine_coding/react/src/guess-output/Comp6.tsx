import { useState } from 'react'

export default function Comp6() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    setTimeout(() => {
      alert(count)
    }, 3000)
  }

  return (
    <div>
      <h1>Comp6</h1>
      <button onClick={handleClick}>Click Me</button>
      <h3>Count: {count}</h3>
    </div>
  )
}
