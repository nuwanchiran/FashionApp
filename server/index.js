const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const apiPort = 3000
const db = require('./db')
const apiRouter = require('./routes/API_Router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Fashion Store Service Backend!")
})

app.use('/api', apiRouter)

app.listen(apiPort, () => {
    console.log(`Express Server is running on port ${apiPort} `);
})