import { useEffect, useState } from 'react'

interface ICountDownTimerProps {
  seconds: number
}
export default function CountDownTimer(props: ICountDownTimerProps) {
  const { seconds = 10 } = props
  const [sec, setSec] = useState<number>(seconds)

  useEffect(() => {
    const timerInstance = setInterval(() => {
      setSec(sec => sec - 1)
    }, 1000)

    // In React, it's important to clean up any resources that your component uses when it is unmounted or when the dependencies of your useEffect hook change. If you don't clean up resources like intervals, timeouts, or subscriptions, they can continue running even after your component is removed from the DOM, which can lead to memory leaks or unexpected behavior.

    // By returning a cleanup function from the useEffect hook with clearInterval(timerInstance), you ensure that the interval is cleared when the component is unmounted or when the dependencies change.

    // This helps to prevent memory leaks and ensures that your application behaves as expected.

    return () => clearInterval(timerInstance)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>CountDown Timer</h2>
      <h4>
        current time: <b>{sec}</b>
      </h4>
    </div>
  )
}
