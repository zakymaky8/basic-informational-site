// const http = require("http");
// const fs = require("fs");
// const path = require("path");

const PORT = 8080

// const server = http.createServer()

// function getPathToFile(basename) {
//     return path.join(__dirname, "infopages", basename)
// }

// server.on("request", (req, res) => {
//     res.setHeader("content-type", "text/html");

//     let pathTofile = "";

//     switch(req.url) {
//         case "/":
//             res.statusCode = 200;
//             pathTofile = getPathToFile("index.html");
//             break
//         case "/contact-me":
//             res.statusCode =200;
//             pathTofile = getPathToFile("contact-me.html");
//             break;
//         case "/about":
//             res.statusCode = 200;
//             pathTofile = getPathToFile("about.html");
//             break;
//         default:
//             res.statusCode = 404;
//             pathTofile = getPathToFile("404.html");
//     }

//     fs.createReadStream(pathTofile, "utf-8").pipe(res);
// })

// server.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// })

const express = require("express");
const app = express();

const path = require("path");

app.get("/" || "/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "infopages", "index.html"));
})
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "infopages", "about.html"));
})
app.get("/contact-me", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "infopages", "contact-me.html"));
})
app.get("/*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "infopages", "404.html"));
})

app.listen(PORT, () => {
    console.log("App is listening on port " + PORT);
})