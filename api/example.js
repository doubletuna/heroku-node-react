const express = require('express-promise-router')
const router = express()

router.get('/', (req, res) => {
  res.status(200).json({message: "it works.."})
})

module.exports = router