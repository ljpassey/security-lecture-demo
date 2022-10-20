const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { signup, login} = require('./userController')

app.post(`/signup`, signup)
app.post(`/login`, login)

app.listen(4006, () => console.log(`running on port 4006`))