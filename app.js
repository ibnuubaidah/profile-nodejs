'use strict'

const express = require('express')

const PORT = 8080
const HOST = '127.0.0.1'

const app = express()
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.use(express.static('public'));

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)