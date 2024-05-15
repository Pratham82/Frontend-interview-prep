import { useInput } from '../hooks'

function InputHookComp() {
  const input = useInput({
    initialValue: '',
  })

  return (
    <>
      <input
        type="text"
        value={input.value}
        onChange={input.handleChange}
        placeholder="Enter your name here"
      />
      <h4>value: {input.value}</h4>
      <button onClick={input.reset}>Reset</button>
    </>
  )
}

export default InputHookComp
