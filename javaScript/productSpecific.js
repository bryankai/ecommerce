
const productsGrid = document.querySelector('.products-grid')

const grid = document.createElement('div')
grid.classList.add('grid')
const info = document.createElement('div')
info.classList.add('info')
// info.classList.add('hide')
productsGrid.appendChild(info)
productsGrid.appendChild(grid)

class GridItem{
  constructor(elementToRenderIn){
    this.elementToRenderIn = elementToRenderIn
    this.size = 8
    this.products = []

  }
  toHTMLElementArray(){
    const arr = []
    for (var numOfGridItems = 0; numOfGridItems < this.products.length; numOfGridItems++) {
      const gridItem = document.createElement('div')
        gridItem.addEventListener('mouseenter', event => {
          $(event.target.firstChild).toggleClass('fade')
        })
        gridItem.addEventListener('mouseleave', event => {
          $(event.target.firstChild).toggleClass('fade')
        })
        gridItem.classList.add('grid-item')

      const gridInner = document.createElement('div')
        gridInner.classList.add('grid-inner')

      const gridInnerName = document.createElement('div')
        gridInnerName.classList.add('name')
        gridInnerName.innerHTML = `${this.products[numOfGridItems].name}`

      const gridInnerPrice = document.createElement('div')
        gridInnerPrice.classList.add('price')
        gridInnerPrice.innerHTML = `${this.products[numOfGridItems].price}`

      const gridInnerImgCont = document.createElement('div')
        gridInnerImgCont.style.height = '100%'

      const itemID = numOfGridItems
      const gridInnerImg = document.createElement('img')
        gridInnerImg.setAttribute('src', `${this.products[numOfGridItems].img}`)
        gridInnerImg.addEventListener('click', event => {
          // info.toggleClass('hide')
          const infoItem = new SpecificInfo(info, this.products[itemID])
          infoItem.render()
        });
        gridInnerImg.style.borderRadius = '50%'
        gridInnerImg.style.height = '100%'
        gridInnerImg.style.width = '100%'
        gridInnerImg.style.zIndex = '1'

      gridInner.appendChild(gridInnerImg)
      gridItem.appendChild(gridInnerName)
      gridItem.appendChild(gridInnerPrice)
      gridItem.appendChild(gridInner)
      arr.push(gridItem)
    }
    return arr
  }
  addProduct(product){
    this.products.push(product)
    return this //instance of Class
  }
  render(){
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, this.toHTMLElementArray())
  }
}

const itemInGrid = new GridItem(grid)
productList.forEach(product => {
  itemInGrid.addProduct(product)
})
itemInGrid.render()


class SpecificInfo{
  constructor(elementToRenderIn, product){
    this.elementToRenderIn = elementToRenderIn
    this.product = product
  }

  toHTMLElement(){
    const infoText = document.createElement('div')
    const infoTitle = document.createElement('div')
      infoTitle.classList.add('info-name')
      infoTitle.innerHTML = `${this.product.name}`
    const infoPrice = document.createElement('div')
      infoPrice.innerHTML = `$${this.product.price}`
      infoPrice.classList.add('info-price')
    const infoCompany = document.createElement('div')
      infoCompany.innerHTML = `by ${this.product.company}`
      infoCompany.classList.add('info-company')
    const infoDesc = document.createElement('div')
      infoDesc.classList.add('info-desc')
      infoDesc.innerHTML = `${this.product.desc}`
    const addToCartDiv = document.createElement('div')
    const addToCart = document.createElement('a')
      addToCartDiv.classList.add('add-to-cart')
      addToCart.innerHTML = `<i class="fas fa-cart-plus"></i>`

    addToCartDiv.appendChild(addToCart)

    infoText.appendChild(infoTitle)
    infoText.appendChild(infoCompany)
    infoText.appendChild(infoPrice)
    infoText.appendChild(infoDesc)
    infoText.appendChild(addToCartDiv)
    return infoText
  }
  render(){
    empty(this.elementToRenderIn)
    this.elementToRenderIn.appendChild(this.toHTMLElement())
  }
}


function empty(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
  return element
}
function appendChildrenArray(parent, childrenArray){
  childrenArray.reduce((parentNode, child) => {
    parentNode.appendChild(child)
    return parentNode
  }, parent)
  return parent
}
