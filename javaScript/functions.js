
//////////////
// HOMEPAGE //
//////////////

function validateEmail () {
  var email = $(this).val();
  var regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g);

  if ( !regex.exec(email) ) { $(this).addClass('warning') }
  else { $(this).removeClass('warning') };
};


////////////////////////
// HOME AND PRODUCTS //
///////////////////////



//////////////
// PRODUCTS //
//////////////
