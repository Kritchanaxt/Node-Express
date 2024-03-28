const http = require('http');

const server = http.createServer((req, res) => {
    const myhtml = `
        <style>
            body {
                background-color: lightblue;
            }
            p {
                color: red;
            }
        </style>
        <h1>Hello Node.js</h1>
        <p>Kritchanat student | 2024</p>`;
    res.end(myhtml);
});

server.listen(8081, 'localhost', () => {
    console.log("Started server in port 8081");
});
