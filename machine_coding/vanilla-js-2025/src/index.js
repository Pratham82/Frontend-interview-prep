console.log({ msg: "loading template and script......." })
console.log({ msg: "here 112121" })

const loadComponent = async name => {
  // Step 1: Load the HTML template
  const res = await fetch(`./templates/${name}.html`)
  const html = await res.text()
  document.getElementById("app").innerHTML = html

  // ✅ Step 2: Dynamically import the JS logic
  const module = await import(`./js/${name}.js`)
  if (module && typeof module.init === "function") {
    module.init() // call its init function
  }
}

// const loadComponent = async name => {
//   const module = await import(`./js/${name}.js`)

//   if (module?.template) {
//     // 1. Convert HTML string to real DOM nodes
//     const templateContainer = document.createElement("div")
//     templateContainer.innerHTML = module.template

//     // 2. Extract <template> and inject its content
//     const template = templateContainer.querySelector("template")
//     const clone = template.content.cloneNode(true)
//     document.getElementById("app").innerHTML = ""
//     document.getElementById("app").appendChild(clone)
//   }

//   if (module?.init) {
//     module.init()
//   }
// }

loadComponent("products")
// loadComponent("blog")
