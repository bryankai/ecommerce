document.addEventListener('DOMContentLoaded', function(){


  let totalArr = []
  const navBar = document.querySelector('.navbar')
  const navBrand = document.createElement('div')
  navBrand.classList.add('navBrand')
  const navOptions = document.createElement('div')
    navOptions.classList.add('navOptions')
  const navLogo = document.createElement('img')
    navLogo.setAttribute('src', './photos/WatchIcon.png')
    navLogo.classList.add('navLogo')
  const navTitle = document.createElement('a')
    navTitle.classList.add('navTitle')
    navTitle.setAttribute('href', '/index.html')
    navTitle.innerHTML = 'Just in Time'
  const homeLink = document.createElement('a')
    homeLink.classList.add('navLink')
    homeLink.setAttribute('href', '/index.html')
    homeLink.innerHTML = '| Home'
  const productsLink = document.createElement('a')
    productsLink.classList.add('navLink')
    productsLink.innerHTML = '| Products |'
    productsLink.setAttribute('href', '/products.html')

  navBrand.appendChild(navLogo)
  navBrand.appendChild(navTitle)

  navOptions.appendChild(homeLink)
  navOptions.appendChild(productsLink)

  navBar.appendChild(navBrand)
  navBar.appendChild(navOptions)

  const cart = document.createElement('a')
  navOptions.appendChild(cart)
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>`
    cart.classList.add('cart')
    cart.addEventListener('click', event => {

    renderCart()
  })
})
