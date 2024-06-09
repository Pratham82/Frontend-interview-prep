import { useEffect, useState } from 'react'

export default function Comp9() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    function handleResize() {
      setCount(count + 1)
      console.log('screen resized', { count })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h1>Comp9</h1>
      <h3>Value: {count}</h3>
    </div>
  )
}
