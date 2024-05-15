// ** Implementation without using array
const addBtn = document.getElementById('add-btn')
const inputField = document.getElementById('input-text')
const listContainer = document.getElementById('list-container')

const handleAddTask = e => {
  // check if the input value is not empty and add it inside an array
  const todoValue = inputField.value
  if (todoValue !== '') {
    const listItem = document.createElement('li')
    listItem.textContent = todoValue
    listItem.classList.add('list-item')

    // add cross icon in list-item
    const crossIcon = document.createElement('span')
    crossIcon.innerHTML = '\u00d7'
    crossIcon.classList.add('cross-icon')
    listItem.appendChild(crossIcon)

    // add list-item in list
    listContainer.appendChild(listItem)
  }
  // flush the input after adding the value in array
  inputField.value = ''
}

addBtn.addEventListener('click', handleAddTask)

// handler todo submission based on enter
inputField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    handleAddTask()
  }
})

// removing the element from the array
listContainer.addEventListener('click', event => {
  // handle list item clicked
  switch (true) {
    case event.target.tagName === 'LI': {
      // removing and adding the className completed from the li tag
      event.target.classList.toggle('completed')
      break
    }

    case event.target.tagName === 'SPAN': {
      // here we are accessing the parent element i.e the li tag and removing that li
      event.target.parentElement.remove()
      break
    }
    default:
      return
  }
})

console.log('🚀 ~ addBtn:', addBtn)
console.log('🚀 ~ typeof:', typeof addBtn)
console.log('🚀 ~ typeof:', typeof inputField)
console.log('🚀 ~ typeof:', typeof listContainer)
