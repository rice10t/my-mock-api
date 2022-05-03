const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.all('/*', async (req, res) => {
  console.log(req.body)
  const response = req.body?.response

  const delayMillis = +req.query.delay
  if (delayMillis > (5 * 60 * 1000)) {
    throw new Error("delay time must be lower than 5 minutes")
  }
  await delay(delayMillis)

  res.json(response)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function delay(millis) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}