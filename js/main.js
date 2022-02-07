const form = document.getElementById('form')
const firstName = form.querySelector('.first-name')
const lastName = form.querySelector('.last-name')
const email = form.querySelector('.email')
const password = form.querySelector('.password')
const submit = form.querySelector('.submit')

submit.addEventListener('click', (ev) => {
  ev.preventDefault()

  checkInputs()
})

function checkInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (firstNameValue === '') {
    addErrorMsg(firstName)
  } else {
    removeErrorMsg(firstName)
  }

  if (lastNameValue === '') {
    addErrorMsg(lastName)
  } else {
    removeErrorMsg(lastName)
  }

  if (!validateEmail(emailValue)) {
    addErrorMsg(email)
  } else {
    removeErrorMsg(email)
  }

  if (passwordValue === '') {
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

function validateEmail(validateValue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    validateValue,
  )
}
