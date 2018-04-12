const currentCart = JSON.parse(localStorage.getItem('cart')) || []
const productsGrid = document.querySelector('.products-grid')
const grid = document.createElement('div')
grid.classList.add('grid')
const info = document.createElement('div')
info.classList.add('info')
// const cartData = localStorage.get('cart')
const cartContainer = document.createElement('div')
const filterCont = document.createElement('div')
filterCont.classList.add('filters')
// info.appendChild(filterCont)
const showAll = document.createElement('div')
showAll.classList.add('filter')
showAll.innerHTML = 'All'
showAll.addEventListener('click', function(){
  itemInGrid.setFilter()
  itemInGrid.render()
})
const filterMen = document.createElement('div')
filterMen.classList.add('filter')
filterMen.innerHTML = "Men's"
filterMen.addEventListener('click', function(){
  itemInGrid.setFilter('men')
  itemInGrid.render()
})
const filterWomen = document.createElement('div')
filterWomen.classList.add('filter')
filterWomen.innerHTML = "Women's"
filterWomen.addEventListener('click', function(){
  itemInGrid.setFilter('women')
  itemInGrid.render()
})
const lessThan70 = document.createElement('div')
lessThan70.classList.add('filter')
lessThan70.innerHTML = "$40.00-$70.00"
lessThan70.addEventListener('click', function(){
  itemInGrid.setFilter('70')
  itemInGrid.render()
})
const greaterThan100 = document.createElement('div')
greaterThan100.classList.add('filter')
greaterThan100.innerHTML = "$100 and up"
greaterThan100.addEventListener('click', function(){
  itemInGrid.setFilter('100')
  itemInGrid.render()
})

filterCont.appendChild(showAll)
filterCont.appendChild(filterMen)
filterCont.appendChild(filterWomen)
filterCont.appendChild(lessThan70)
filterCont.appendChild(greaterThan100)
info.appendChild(filterCont)


const watchDesc = document.createElement('div')
info.appendChild(watchDesc)
const cartList = document.createElement('ul')
cartList.classList.add('cartUl')
cartContainer.appendChild(cartList)
info.appendChild(cartContainer)
// info.classList.add('hide')
productsGrid.appendChild(info)
productsGrid.appendChild(grid)


class GridItem{
  constructor(elementToRenderIn){
    this.elementToRenderIn = elementToRenderIn
    this.size = 8
    this.products = []
    this.setFilter()

  }
  setFilter(type){
    switch(type){
      case 'men':
        this.currentFilter = element => element.type === 'men'
      break;
      case 'women':
        this.currentFilter = element => element.type === 'women'
      break;
      case '70':
        this.currentFilter = element => element.price <= 70
      break;
      case '100':
        this.currentFilter = element => element.price > 100
      break;
      default:
        this.currentFilter = element => true
    }
  }
  toHTMLElementArray(filter){

    return this.products.filter(filter).reduce((acc, ele, index)=>{
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
        gridInnerName.innerHTML = `${ele.name}`

      const gridInnerPrice = document.createElement('div')
        gridInnerPrice.classList.add('price')
        gridInnerPrice.innerHTML = `${ele.price}`

      const gridInnerImgCont = document.createElement('div')
        gridInnerImgCont.style.height = '100%'

      const itemID = index
      const gridInnerImg = document.createElement('img')
        gridInnerImg.setAttribute('src', `${ele.img}`)
        gridInnerImg.addEventListener('click', event => {
          // info.toggleClass('hide')
          const infoItem = new SpecificInfo(watchDesc, this.products[itemID])
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
      acc.push(gridItem)
      return acc
    },[])
  }
  addProduct(product){
    this.products.push(product)
    return this //instance of Class
  }
  render(){
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, this.toHTMLElementArray(this.currentFilter))
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
      addToCart.addEventListener('click', (event) => {
        const foundWatch = currentCart.find(watch => watch.name === this.product.name)
        if (foundWatch){
          foundWatch.quantity = foundWatch.quantity + 1
        } else {
          currentCart.push({name: this.product.name, price: this.product.price, quantity: 1})
        }
        if (cartContainer.firstChild.nextSibling){
          console.log('booby');
        renderCart()
        }

        localStorage.setItem('cart', JSON.stringify(currentCart))

        addedToCart.classList.remove('hide')
        setTimeout(function(){
          addedToCart.classList.add('hide')
        }, 3500)
    })
    const addedToCart = document.createElement('div')
    addedToCart.classList.add('add-to-cart')
    addedToCart.classList.add('hide')
    addedToCart.innerHTML = "(Added to Cart!)"

    addToCartDiv.appendChild(addedToCart)
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
