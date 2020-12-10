const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const Route = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use('/posts', Route)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname})
})

mongoose.connect('mongodb://localhost:27017/door', {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(3000)