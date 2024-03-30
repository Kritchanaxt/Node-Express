const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname, '..', 'webpage', 'index.html'))
})

router.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'webpage', 'product.html'))
})

router.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>")
})

module.exports = router