import { useState } from 'react'

export default function LiftingUpState() {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

function ParentComponent() {
  const [counter, setCounter] = useState(0)
  const onUpdateCount = () => {
    console.log({ msg: 'here' })
    setCounter(counter + 1)
  }
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <h1>Parent Component</h1>
      <h3>Counter: {counter} </h3>
      <ChildComponent onUpdateCount={onUpdateCount} />
    </div>
  )
}

function ChildComponent(props) {
  const { onUpdateCount } = props
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={onUpdateCount}>Update Count +</button>
    </div>
  )
}
