document.addEventListener('DOMContentLoaded', function(){


  const navBar = document.querySelector('.navbar')
  const navLogo = document.createElement('img')
    navLogo.setAttribute('src', './photos/WatchIcon.png')
    navLogo.classList.add('navLogo')
  const homeLink = document.createElement('a')
    homeLink.setAttribute('href', '/index.html')
    homeLink.innerHTML = 'Home'
  const productsLink = document.createElement('a')
    productsLink.innerHTML = 'Products'
    productsLink.setAttribute('href', '/products.html')
  const cart = document.createElement('div')
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>`
    cart.classList.add('cart')



  navBar.appendChild(navLogo)
  navBar.appendChild(homeLink)
  navBar.appendChild(productsLink)
  navBar.appendChild(cart)


  const signupButton = document.getElementById('email-signup-button')
  signupButton.addEventListener('click',validateEmail)

  // const productsGrid = document.querySelector('.products-grid')
  //
  // const grid = document.createElement('div')
  // grid.classList.add('grid')
  // const info = document.createElement('div')
  // info.classList.add('info')
  // productsGrid.appendChild(info)
  // productsGrid.appendChild(grid)
  //
  //
  //
  // for (var numOfGridItems = 0; numOfGridItems < 8; numOfGridItems++) {
  //   const gridItem = document.createElement('div')
  //   gridItem.addEventListener('mouseover', function(){
  //
  //   })
  //   gridItem.classList.add('grid-item')
  //   const gridInner = document.createElement('div')
  //   gridInner.classList.add('grid-inner')
  //   const gridInnerName = document.createElement('div')
  //   gridInnerName.style.textAlign = 'center'
  //   gridInnerName.style.fontSize = '15px'
  //   gridInnerName.style.fontWeight = 'bold'
  //   gridInnerName.innerHTML = `${productList[numOfGridItems].name}`
  //   const gridInnerPrice = document.createElement('div')
  //   gridInnerPrice.style.textAlign = 'center'
  //   gridInnerPrice.style.fontSize = '15px'
  //   gridInnerPrice.innerHTML = `${productList[numOfGridItems].price}`
  //   const gridInnerImgCont = document.createElement('div')
  //   gridInnerImgCont.style.height = '100%'
  //   const gridInnerImg = document.createElement('img')
  //   gridInnerImg.setAttribute('src', `${productList[numOfGridItems].img}`)
  //   gridInnerImg.style.borderRadius = '50%'
  //   gridInnerImg.style.height = '100%'
  //   gridInnerImg.style.width = '100%'
  //   gridInner.appendChild(gridInnerImg)
  //   // gridInner.appendChild(gridInnerImgCont)
  //
  //   // gridInner.appendChild(gridInnerName)
  //   // gridInner.appendChild(gridInnerPrice)
  //   gridItem.appendChild(gridInner)
  //
  //   grid.appendChild(gridItem)
  // }

})
