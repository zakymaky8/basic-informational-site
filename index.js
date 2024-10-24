const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080

const server = http.createServer()

server.on("request", (req, res) => {
    if (req.url === "/") {
        fs.readFile("./infopages/index.html", (err, file) => {
            err ? console.log(err) : res.end(file);
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})