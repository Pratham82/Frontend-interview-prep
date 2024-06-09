import { useState } from 'react'

export default function Comp2() {
  const [text, setText] = useState('Hello')
  const handleClick = () => {
    setText(text + ' World')
    setText('React')
  }
  return (
    <div>
      <h1>Component 2</h1>
      <h3>Text: {text}</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
