import { useEffect, useState } from 'react'

export default function Comp1() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(count + 1)
  }, [])

  useEffect(() => {
    setCount(count + 10)
  }, [])

  useEffect(() => {
    // setCount(count + 10)
    setCount(count => count + 100)
  }, [])
  return <div>Count : {count}</div>
}
