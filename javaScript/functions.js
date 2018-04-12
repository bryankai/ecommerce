
//////////////
// HOMEPAGE //
//////////////

function validateEmail () {

  const regex = '/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g'
  // chekc if the email input in the form is an email address
  if (!true) {
    // notify the user they are signed up
    // create HTML element?
    console.log('Signed up!')
  } else {
    // give warning that it is not a valid email address
    console.log('Not a valid email address')
  }
};


////////////////////////
// HOME AND PRODUCTS //
///////////////////////



//////////////
// PRODUCTS //
//////////////
const renderCart = function(){
  const list = document.createElement('li')
  const total = document.createElement('div')
    total.classList.add('add-to-cart')
  const totalNum = document.createElement('span')
    totalNum.style.float = 'right'
  const totalText = document.createElement('span')
    totalText.style.float = 'left'
  empty(cartContainer)
  const lis = currentCart.map(item => `<li>(${item.quantity}) ${item.name} ..... $${(item.price * item.quantity).toFixed(2)}</li>`).join('')
  totalArr = []
  currentCart.map( item => {
    totalArr.push(item.price * item.quantity)
  var sum =  totalArr.reduce(function(a,b){
      return a+b;
    }, 0)
    totalNum.innerHTML = `$${(sum).toFixed(2)}`
    totalText.innerHTML = 'Total:'

    total.appendChild(totalText)
    total.appendChild(totalNum)

    cartList.innerHTML = lis
    cartContainer.appendChild(cartList)
    cartContainer.appendChild(total)
})
}
