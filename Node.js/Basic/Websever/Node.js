const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("<h1>Hello Server</h1>")
    res.end()
}) 

server.listen(8080,'localhost',()=>{
    console.log("start sever in port 8080")
})