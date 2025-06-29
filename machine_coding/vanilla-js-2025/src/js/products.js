const PRODUCTS_URL = "https://fakestoreapi.com/products?sort=asc"
const fetchProducts = async () => {
  try {
    const res = await fetch(PRODUCTS_URL)
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

const renderProductListing = async () => {
  console.log("Product listing attached")
  // call fetch API
  const productsData = await fetchProducts()
  console.log("🚀 ~ renderProductListing ~ productsData:", productsData)
  console.log("🚀 ~ renderProductListing ~ productsData:", productsData)
  const productsUl = document.getElementById("products")
  productsUl.style.cssText = "display:flex;flex-direction:column; gap:10px;border:1px solid black"

  // create select button and options
  const sortingSelect = document.createElement("select")
  const ascendingOption = document.createElement("option")
  const descendingOption = document.createElement("option")

  ascendingOption.value = "ASC"
  ascendingOption.textContent = "Ascending"

  descendingOption.value = "DEC"
  descendingOption.textContent = "Descending"

  sortingSelect.appendChild(ascendingOption)
  sortingSelect.appendChild(descendingOption)

  productsUl.insertAdjacentElement("beforebegin", sortingSelect)
  // create list of products
  productsData.forEach(product => {
    const productBlock = document.createElement("li")
    productBlock.setAttribute("role", "listitem")
    productBlock.style.cssText =
      "width:90%;border:1px solid black;padding:10px; display:flex;justify-content:flex-start; gap:20px"

    // add image and text
    const figure = document.createElement("figure")
    const productImage = document.createElement("img")
    productImage.style.cssText = "width:150px; height:150px;"
    productImage.src = product.image

    const productText = document.createElement("h2")
    // productText.style.cssText = "font-weight:bold"
    productText.textContent = product.title

    const imageCaption = document.createElement("figcaption")
    imageCaption.textContent = product.title

    figure.appendChild(productImage)
    // figure.appendChild(imageCaption)

    const productPrice = document.createElement("p")
    productPrice.style.cssText = "font-weight:bold"
    productPrice.textContent = product.price

    const productNameDiv = document.createElement("div")
    productNameDiv.style.cssText = "display:flex;flex-direction:column"

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "❌"
    deleteBtn.style.cssText =
      "background:none; border:none; cursor:pointer; font-size:20px;cursor:pointer"

    const editBtn = document.createElement("button")
    editBtn.textContent = "✏️"
    editBtn.style.cssText =
      "background:none; border:none; cursor:pointer; font-size:20px;margin-left:auto;cursor:pointer"

    const actions = document.createElement("div")
    actions.style.cssText = "display:flex;align-items:center;margin-left:auto"

    productNameDiv.appendChild(productText)
    productNameDiv.appendChild(productPrice)

    actions.appendChild(deleteBtn)
    actions.appendChild(editBtn)

    productBlock.appendChild(figure)
    productBlock.appendChild(productNameDiv)
    productBlock.appendChild(actions)

    productsUl.appendChild(productBlock)

    deleteBtn.addEventListener("click", e => {
      productsUl.removeChild(productBlock)
    })

    let editProductTitle
    let editProductPrice

    editBtn.addEventListener("click", e => {
      const isEditing = editBtn.textContent === "✅"

      if (isEditing) {
        // Save fields
        product.title = editProductTitle.value
        product.price = editProductPrice.value

        productText.textContent = product.title
        productPrice.textContent = product.price

        productNameDiv.replaceChild(productText, editProductTitle)
        productNameDiv.replaceChild(productPrice, editProductPrice)
        editBtn.textContent = "✏️"
      } else {
        // Enter edit mode
        editProductTitle = document.createElement("input")
        editProductTitle.value = productText.textContent

        editProductPrice = document.createElement("input")
        editProductPrice.value = productPrice.textContent

        productNameDiv.replaceChild(editProductTitle, productText)
        productNameDiv.replaceChild(editProductPrice, productPrice)
        editBtn.textContent = "✅"
      }
    })
  })
}

export function init() {
  const template = document.getElementById("products-template")
  if (template) {
    const clone = template.content.cloneNode(true)
    document.getElementById("app").appendChild(clone)

    renderProductListing()
  }
}
