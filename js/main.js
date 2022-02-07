const form = document.getElementById('form')
// const inputs = Array.from(form.querySelectorAll('input'))
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
// const submit = document.querySelector('.submit')


function checkInputs() {


  const firstNameValue = firstName.value
  const lastNameValue = lastName.value
  const emailValue = email.value
  const passwordValue = password.value

 const validate = document.querySelector('input').validity.valid

  if (firstNameValue !== validate) {
    addErrorMsg(firstName)
  } else {
    removeErrorMsg(firstName)
  }

  if (lastNameValue !== validate) {
    addErrorMsg(lastName)
  } else {
    removeErrorMsg(lastName)
  }

  if (emailValue !== validate) {
    addErrorMsg(email)
  } else {
    removeErrorMsg(email)
  }

  if (passwordValue !== validate) {
    addErrorMsg(password)
  } else {
    removeErrorMsg(password)
  }

 
}

function addErrorMsg(input) {
  const formDiv = input.parentElement
  const errorMsg = formDiv.querySelector('.error-msg-hidden')

  
  errorMsg.classList.add('error-msg')
  input.classList.add('error')
}

function removeErrorMsg(input) {
  const formDiv = input.parentElement
  const errorMsg = formDiv.querySelector('.error-msg-hidden')

  errorMsg.classList.remove('error-msg')
  input.classList.remove('error')
}

// function validate(validateValue) {
//    validateValue = document.querySelector('input').validity.valid
//   return validateValue
// }

form.addEventListener('submit', function(ev) {
  ev.preventDefault()

  checkInputs()
})
