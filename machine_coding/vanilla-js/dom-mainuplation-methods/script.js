const divElement = document.createElement('div')

const textContent = document.createTextNode('This is Text')
divElement.appendChild(textContent)

// Inline styles
divElement.style.border = '1px solid black'
divElement.style.padding = '10px'
divElement.style.display = 'flex'
divElement.style.justifyContent = 'space-between'
divElement.style.alignItems = 'center'
divElement.style.borderRadius = '10px'

// Add styles via classes
divElement.classList.add('container')

// Add div to body
document.body.appendChild(divElement)

const crossButton = document.createElement('span')
crossButton.style.backgroundColor = 'red'
crossButton.style.padding = '5px 7px'
crossButton.style.borderRadius = '50%'
crossButton.innerHTML = 'X'
crossButton.style.cursor = 'pointer'

// Add cursor pointer on hover of cross button
crossButton.addEventListener('mouseover', () => {
  crossButton.style.cursor = 'pointer'
})

divElement.appendChild(crossButton)

crossButton.addEventListener('click', () => {
  // remove div
  document.body.removeChild(divElement)
})

// Remove the component
setTimeout(() => {}, 1000)
