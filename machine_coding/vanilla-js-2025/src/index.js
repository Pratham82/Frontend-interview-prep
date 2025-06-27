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

loadComponent("pokemons")
