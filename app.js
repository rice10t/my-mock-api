const express = require('express')
const app = express()

app.use(express.json())

app.all('/*', async (req, res) => {
  console.log(req.body)
  const response = req.body?.response

  let delayMillis = +req.query.delay
  if (delayMillis > (5 * 60 * 1000)) {
    throw new Error("delay time must be lower than 5 minutes")
  }
  if (req.method === "OPTIONS") {
    delayMillis = 0;
  }

  await delay(delayMillis)

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type"
  )
  res.json(response)
})

function delay(millis) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}

const port = process.argv[2] != null ? +process.argv[2] : 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
