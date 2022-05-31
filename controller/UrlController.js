const express = require('express')
const axios = require('axios')
const mode_1 = require('../models/schema')
const app = express()
app.use(express.json())

const URL = 'https://api.github.com/users/technoweenie'

const thirdPartyUrl = async (req, res) => {
    try {
        axios.get(URL)
            .then((response) => {
                if (response.length == 0) {
                    let { status, statusText } = response.data
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
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = {thirdPartyUrl}