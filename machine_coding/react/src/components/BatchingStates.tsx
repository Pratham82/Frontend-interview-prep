import { useEffect, useState } from 'react'

export default function BatchingStates() {
  const [counter, setCounter] = useState(0)
  const [renderedCount, setRenderedCount] = useState(0)

  const onIncreaseCount = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log({ message: 'rendered' })
    setCounter(counter + 10)
    setRenderedCount(renderedCount + 1)
  }, [])

  console.log({ counter })
  console.log({ renderedCount })

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncreaseCount}>Increase +</button>
    </div>
  )
}
