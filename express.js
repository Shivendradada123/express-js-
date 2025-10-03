const http = require('http')

const express = require('express');


const app = express();

app.use((req, res, next) => {
    console.log("this is a first request", req.url, req.method);
 next();
});
app.use((req, res, next) => {
    console.log("this is a Second request", req.url, req.method);

    res.send("shivendra mauhariya");
});




const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`server is runinng on  adress http://localhost:${PORT}`)
});


