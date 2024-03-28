const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log("url = ", pathName);
    if(pathName === "/" || pathName === "/home"){
        const myhtml = `
        <style>
            body {
                background-color: lightblue;
            }
            h1 {
                color: green;
            }
            p {
                color: blue;
            }
        </style>
        <h1>Hello Homepage</h1>
        <p>Kritchanat student | 2024</p>`;
    res.end(myhtml);
    } else if (pathName === "/product"){
        const myhtml = `
        <style>
            p {
                color: yellow;
            }
        </style>
        <h1>Hello Product</h1>
        <p>ice-cream yummy</p>`;
    res.end(myhtml);
    } else {
        res.writeHead(404);
        const myhtml = `
        <style>
            h1 {
              color: red;
            }
        </style>
        <h1>Not Found</h1>`;
    res.end(myhtml);
    }
});

server.listen(8081, 'localhost', () => {
    console.log("Started server in port 8081");
});
