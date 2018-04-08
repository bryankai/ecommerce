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








})
