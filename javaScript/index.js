document.addEventListener('DOMContentLoaded', function(){


  const navBar = document.querySelector('.navbar')
  const navBrand = document.createElement('div')
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
  const cart = document.createElement('a')
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>`
    cart.classList.add('cart')


  navBrand.appendChild(navLogo)
  navBrand.appendChild(navTitle)

  navOptions.appendChild(homeLink)
  navOptions.appendChild(productsLink)
  navOptions.appendChild(cart)

  navBar.appendChild(navBrand)
  navBar.appendChild(navOptions)
})
