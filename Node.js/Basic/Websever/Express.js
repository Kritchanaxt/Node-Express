const express = require('express')
const app = express()

app.use((req,res)=>{
    res.send("<h1>Hello Express.js</h1>")
})

app.listen(8082,()=>{
    console.log("Start server in port 8082")
})