const express = require('express')
const app = express()

app.use((req,res)=>{
    res.send("Hello Express.js")
})

app.listen(8082,()=>{
    console.log("start sever of port 8082")
})