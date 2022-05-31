const express = require('express')
const url  = require('../controller/UrlController')

const router = express.Router()

router.post('/githuburl', url.thirdPartyUrl)

module.exports = router