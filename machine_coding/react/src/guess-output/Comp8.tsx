import { useEffect, useState } from 'react'

export default function Comp8() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(value + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>Comp8</h1>
      <h3>Value: {value}</h3>
    </div>
  )
}
