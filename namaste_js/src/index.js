const loadComponent = async name => {
  // Step 1: Load the HTML template
  // const res = await fetch(`./templates/${name}.html`)
  // const html = await res.text()
  // document.getElementById("app").innerHTML = html

  // Step 2: Dynamically import the JS logic
  const module = await import(`../${name}.js`)
  if (module && typeof module.init === "function") {
    module.init() // call its init function
  }
}

function getLoadedScripts() {
  const scripts = document.querySelectorAll("script")
  const loadedScripts = []

  scripts.forEach((script, index) => {
    if (script.src) {
      loadedScripts.push({ type: "external", src: script.src })
    } else {
      loadedScripts.push({
        type: "inline",
        contentPreview: script.innerHTML.trim().slice(0, 50) || "[empty]",
      })
    }
  })

  return loadedScripts
}

// Example: Log loaded scripts
console.log(getLoadedScripts())

loadComponent("11_closure_interview_questions")
