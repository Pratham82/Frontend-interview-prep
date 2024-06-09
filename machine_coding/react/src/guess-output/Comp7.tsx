import { useEffect, useState } from 'react'

export default function Comp7() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (count === 5) {
      clearInterval(id)
    }
  }, [count])

  return (
    <div>
      <h1>Comp7</h1>
      <h3>Count: {count}</h3>
    </div>
  )
}
