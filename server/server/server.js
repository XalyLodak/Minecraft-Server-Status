const http = require('http');
const textPlain = "'Content-Type': 'text/plain'";
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            console.log(`POST Request on ${port}, she contains : `, data);
            
            req.writeHead(200, { textPlain });
            console.log("| 200 | Request terminated with success !")
            res.end('This is a simple post response')
        })
    } else {
        res.writeHead(405, { textPlain })
        console.log("405 Returned by log, on HTTP Request")
        res.end("! ERROR 405 : Unauthaurized method, use POST request only.")
    }
});
const port = 50730
server.listen(port, () => {
    console.log(`Minecraft Status Web Server was started on the port ${port} `);
})

console.log("textPlain equals to : " + textPlain)