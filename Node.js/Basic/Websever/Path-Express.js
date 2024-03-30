const express = require('express')
const path = require('path')
const app = express()

app.get("/", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname, 'webpage', 'index.html'))
})

app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname, 'webpage', 'product.html'))
})

app.use((req,res) => {
    res.status(404).send("<h1>404 Not Found</h1>")
})

app.listen(8083,() => {
    console.log("Start sever in port 8083")
})
