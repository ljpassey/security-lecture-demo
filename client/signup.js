const signupForm = document.querySelector('#signup-form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const signupURL = `http://localhost:4006/signup`

const sendSignup = (body) => {
  axios.post(signupURL, body)
  .then(res => {
    if (res.data.success) {
      console.log('signup successful')
      alert('your account was successfully created')
    } else {
      console.log('no axios error, but signup not successful')
    }
  })
  .catch(err => {
    console.log('axios error:')
    console.log(err)
  })
}

function submitHandler(event) {
    event.preventDefault()

    let body = {
        email: emailInput.value,
        password: passwordInput.value
    }

    emailInput.value = ""
    passwordInput.value = ""

    sendSignup(body)
}

signupForm.addEventListener('submit', submitHandler)