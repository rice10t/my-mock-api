const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.all('/*', async (req, res) => {
  console.log(req.body)
  const response = req.body?.response

  let delayMillis = +req.query.delay
  if (delayMillis > (5 * 60 * 1000)) {
    throw new Error("delay time must be lower than 5 minutes")
  }
  if(req.method === "OPTIONS"){
    delayMillis = 0;
  }

  await delay(delayMillis)

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type"
  )
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