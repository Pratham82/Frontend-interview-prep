import { useState } from 'react'

export default function ReRender() {
  console.log('Rerendered....')
  const [name, setName] = useState('prathamesh')
  const [age, setAge] = useState(21)

  return (
    <div>
      <h1>Rerender</h1>
      <h2>Hello {name}</h2>
      <h2>My age is {age}</h2>
      <button onClick={() => setName('prathamesh')}>Update name</button>
      <button onClick={() => setAge(22)}>Update age</button>
    </div>
  )
}
