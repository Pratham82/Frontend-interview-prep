import { useState } from 'react'

export interface IUseInputProps {
  initialValue: string | undefined
}
const useInput = (props: IUseInputProps) => {
  const { initialValue = '' } = props

  const [value, setValue] = useState<string>(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }
  return { value, handleChange, reset }
}

export { useInput }
