const loginForm = document.querySelector('#login-form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const messageDiv = document.querySelector('#message')
const loginURL = `http://localhost:4006/login`

const sendLogin = body => {
  axios.post(loginURL, body)
  .then((res) => {
    if (res.data.success) {
      console.log('login successful')
      displayDestinyUponLogin(res.data)
    } else {
      console.log('no axios error, but login not successful: bad username or password')
      alert('bad username or password')
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

    sendLogin(body)
}

loginForm.addEventListener('submit', submitHandler)

function displayDestinyUponLogin(data) {
    const messageCenterElement = document.createElement('div')

    messageCenterElement.innerHTML = `<p class="destiny-intro">${data.intro}</p><p class="destiny">${data.destiny}</p>`

    messageDiv.appendChild(messageCenterElement)
}

