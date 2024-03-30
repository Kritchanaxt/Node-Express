const http = require('http')
const fs = require('fs')
const path = require('path')

const indexPage = fs.readFileSync(path.join(__dirname, 'webpage', 'index.html'), 'utf-8')
const productPage = fs.readFileSync(path.join(__dirname, 'webpage', 'product.html'), 'utf-8')

const server = http.createServer((req, res) => {
    const pathName = req.url
    console.log("url = ", pathName)
    if (pathName === "/" || pathName === "/home") {
        res.end(indexPage)
    } else if (pathName === "/product") {
        res.end(productPage)
    } else {
        res.writeHead(404)
        res.end("<h1>Not Found!</h1>")
    }
});

server.listen(8081, 'localhost', () => {
    console.log("start server in port 8081")
});
