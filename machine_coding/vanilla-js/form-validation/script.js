const firstName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const myForm = document.getElementById('my-form')

const onFormSubmit = event => {
  // * prevent form submit
  event.preventDefault()
  // Note: It’s important to prevent the default action of the submit event to avoid triggering a page reload. To do this, simply call event.preventDefault() inside the onFormSubmit function.

  const data = new FormData(event.target)
  // const dataObject = Object.fromEntries(data.entries())

  const name = data.get('name')
  const email = data.get('email')
  const password = data.get('password')
  console.log({ name, email, password })
}

myForm.addEventListener('submit', onFormSubmit)

function showDetails(animalType) {
  const animalTypeVal = animalType.getAttribute('data-animal-type')
  const animal = animalType.innerHTML
  console.log('🚀 ~ showDetails ~ animalType:', animalTypeVal, animal)
  alert(`${animal} is a ${animalTypeVal}`)
}
