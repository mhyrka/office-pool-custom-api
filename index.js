const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = parseInt(process.env.PORT || 3000)
const data = require('./app')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))



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
