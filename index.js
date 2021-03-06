const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = parseInt(process.env.PORT || 3000)
const data = require('./app')
const userPicks = require("./routes/user_picks")

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

app.use('/user_picks', userPicks)

app.get('/:week', (req, res) => {
  let record = filterDataById(data, req.params.week)

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
