import { useEffect, useState } from 'react'

export default function TestBed() {
  const [age, setAge] = useState(0)
  useEffect(() => {
    // setAge(1)
    // setAge(2)
    // setAge(3)
    // setAge(4)
    // setAge(5)
    // renders 5
    //
    // setAge(prevAge => {
    //   console.log({ prevAge })
    //   return prevAge + 1
    // })
    // setAge(prevAge => {
    //   console.log({ prevAge })
    //   return prevAge + 2
    // })
    // setAge(prevAge => {
    //   console.log({ prevAge })
    //   return prevAge + 3
    // })
    // setAge(prevAge => {
    //   console.log({ prevAge })
    //   return prevAge + 4
    // })
    // setAge(prevAge => {
    //   console.log({ prevAge })
    //   return prevAge + 5
    // })
  }, [])
  return (
    <div>
      TestBed
      <p>Age: {age}</p>
      <p>{0 && 'zero'}</p>
      <p>{false && 'zero'}</p>
      <p>{true && 'zero1'}</p>
    </div>
  )
}
