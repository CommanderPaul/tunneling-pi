const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Bill!')
})

app.listen(port, () => {
  console.log(`Arlo Hall app listening at http://localhost:${port}`)
})
