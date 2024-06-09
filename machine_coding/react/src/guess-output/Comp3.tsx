import { useEffect, useState } from 'react'

export default function Comp3() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Comp 3</h1>
      <h3>count: {count}</h3>
    </div>
  )
}
