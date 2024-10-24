const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080

const server = http.createServer()

function getPathToFile(basename) {
    return path.join(__dirname, "infopages", basename)
}

server.on("request", (req, res) => {
    res.setHeader("content-type", "text/html");

    let pathTofile = "";

    switch(req.url) {
        case "/":
            res.statusCode = 200;
            pathTofile = getPathToFile("index.html");
            break
        case "/contact-me":
            res.statusCode =200;
            pathTofile = getPathToFile("contact-me.html");
            break;
        case "/about":
            res.statusCode = 200;
            pathTofile = getPathToFile("about.html");
            break;
        default:
            res.statusCode = 404;
            pathTofile = getPathToFile("404.html");
    }

    fs.createReadStream(pathTofile, "utf-8").pipe(res);
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})