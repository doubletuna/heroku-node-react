const express = require('express-promise-router')
const router = express()
const example = require('./example')

router.use('/example', example)

module.exports = router