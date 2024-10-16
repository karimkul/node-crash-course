const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content
    res.setHeader("Content-type", "text/html");

    let path = "./clients&servers/view/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
});
server.listen(3000, "localhost", () => {
    console.log("listening request on port 3000");
});
