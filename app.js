require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

const api = require('./api')
const { Console } = require('console')

app.use('/api', api)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
  console.log('process.env.TEST ? ', process.env.TEST)
} else {
  console.log('process.env.TEST ? ', process.env.TEST)
}

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`server is listening on port ${port}`))
