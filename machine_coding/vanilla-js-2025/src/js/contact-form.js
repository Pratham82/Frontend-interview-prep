export function init() {
  const template = document.getElementById("contact-form-template")
  if (!template) return

  const clone = template.content.cloneNode(true)
  document.getElementById("app").appendChild(clone)

  const contactForm = document.getElementById("contact-form")
  const fields = ["fname", "lname", "phone", "email"]

  const getInput = name => contactForm[name]
  const getErrorElement = name => document.getElementById(`${name}-error`)

  const clearErrors = () => {
    fields.forEach(name => {
      getInput(name).classList.remove("error")
      const errorEl = getErrorElement(name)
      if (errorEl) errorEl.textContent = ""
    })
  }

  const displayErrors = errors => {
    Object.entries(errors).forEach(([field, message]) => {
      const input = getInput(field)
      const errorEl = getErrorElement(field)
      if (input) input.classList.add("error")
      if (errorEl) errorEl.textContent = message
    })
  }

  contactForm.addEventListener("submit", e => {
    e.preventDefault()
    clearErrors()

    const errors = {}

    fields.forEach(name => {
      const value = getInput(name).value.trim()
      if (!value) {
        errors[name] = `Please enter ${name.replace("-", " ")}`
      }
    })

    if (Object.keys(errors).length > 0) {
      displayErrors(errors)
    } else {
      // Optionally handle success here
      alert("Form submitted successfully!")
      contactForm.reset()
    }
  })
}
