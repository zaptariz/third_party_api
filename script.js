const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 12121

app.listen(PORT, () => {
    console.log('server listening on', PORT)
})

const URL = 'https://api.github.com/users/technoweenie'

app.post('/add', (req, res) => {
    axios.get(URL )
        .then((response) => {
            if (response.length == 0) {
                let {
                    status,
                    statusText
                } = response.data
                console.log("Not Found Anything : ", status, statusText)
            }
            res.status(200).send(response.data)
        })
        .catch((error) => {
            console.log('error : ', error)
            if (error.response) {
                let {
                    status,
                    statusText
                } = error.response
                console.log('status : ', status, '\nstatusText : ', statusText)
                res.status(status).send(statusText)
            } else res.status(404).send(error)

        })
})

module.exports = app