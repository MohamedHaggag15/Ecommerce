setTimeout(function() {
  var loader = document.querySelector('.loader');
  var content = document.getElementById('content');

  loader.style.display = 'none';
  content.classList.remove('hide');
}, 3000);


// ##################### Function Search ########################
// ##################### Function Search ########################
// ##################### Function Search ########################

function Search(){
  let searchBar = document.querySelector(".formsearch").value.toUpperCase();
  let allProducts = document.querySelector(".allProducts");
  let products = document.querySelectorAll(".card");
  let productsName = document.getElementsByTagName("h5");

  for(let i = 0; i<productsName.length; i++){
    if(productsName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0 ){
      products[i].style.display = "";

    } else{
      products[i].style.display = "none";

    }

  }
}

// ##################### Scroll to top ########################
// ##################### Scroll to top ########################

let span = document.querySelector(".up");

window.onscroll = function () {
  // if(this.scrollY >= 700){
  //   span.classList.add("show");
  // } else{
  //   span.classList.remove("show");
  // }
  this.scrollY >= 700 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



// ###################################### page of contact us #####################################
// ###################################### page of contact us #####################################
// ###################################### page of contact us #####################################
// ###################################### page of contact us #####################################
// ###################################### page of contact us #####################################



// ################## Form Validation ##########################

const form = document.getElementById('myForm');
const usernameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email_id');
const messageInput = document.getElementById('message');
const PasswordInput = document.getElementById('password');


form.addEventListener('submit', function(event) {
  // event.preventDefault();
  
  if (validateForm()) {
    // Submit the form or perform other actions
    form.submit();
  }
});



function validateForm() {
  let isValid = true;
  
  // Clear previous error messages
  clearErrors();
  
  // Validate username
  if (usernameInput.value.trim() === '') {
    displayError(usernameInput, 'Username is required');
    isValid = false;
  }
  
  // Validate email
  if (!isValidEmail(emailInput.value.trim())) {
    displayError(emailInput, 'Invalid email address');
    isValid = false;
  }
  
  // Validate message
  if (messageInput.value.trim() === '') {
    displayError(messageInput, 'Message is required');
    isValid = false;
  }

  if (PasswordInput.value.trim() === '') {
    displayError(PasswordInput, 'Message is required');
    isValid = false;
  }
  
  return isValid;
}

function isValidEmail(email) {
  // Use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.innerText = message;
}

function clearErrors() {
  const errorMessages = form.getElementsByClassName('error');
  Array.from(errorMessages).forEach(function(error) {
    error.innerText = '';
  });
}

// ###################### Send Mail To Gmail By Emailjs ################################

function SendMail(){
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_01dc4xg", "template_phdtlzq", params).then(function (res) {
    alert("Success!")
  })
}