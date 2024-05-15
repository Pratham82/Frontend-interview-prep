import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // for additional matchers

// Component to test
function InputDisplay() {
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        data-testid="input"
      />
      <div data-testid="display">{inputValue}</div>
    </div>
  )
}

// Test case
test('input value is displayed correctly', () => {
  // Render the component
  render(<InputDisplay />)

  // Get input element
  const input = screen.getByTestId('input')

  // Type into the input
  fireEvent.change(input, { target: { value: 'Hello, World!' } })

  // Get display div
  const display = screen.getByTestId('display')

  // Check if the input value is displayed correctly
  expect(display).toHaveTextContent('Hello, World!')
})
