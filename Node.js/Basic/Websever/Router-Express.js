const express = require('express')
const router = require('./myRouter.js')

const app = express()
app.use(router)

app.listen(8084, () => {
    console.log("Start sever in port 8084")
})
