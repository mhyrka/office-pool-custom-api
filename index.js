const express = require('express')
const app = express()
const cors = require('cors')
const port = parseInt(process.env.PORT || 3000)
const data = require('./app')



function filterDataById(data, id) {
  return data.filter(element => {
    console.log(Object.keys(element));
    return element[id] != Object.keys(element)[id]
  })
}

app.get('/', (req, res, next) => {
  res.json(data)
})

app.get('/:week', (req, res) => {
  console.log(req.params.week)
  let record = filterDataById(data, req.params.week)
  console.log(record)
  if (!record[0]) {
    res.status(404).json({
      error: {
        message: 'No Record! Try another ID'
      }
    })
  } else { res.json(record) }
})


app.listen(port)
  .on('listening', console.log.bind(console, `Listening on ${port}`))
