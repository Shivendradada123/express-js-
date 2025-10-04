
const express = require('express');


const app = express();

app.use( "/", (req, res, next) => {
    console.log("this is a first request", req.url, req.method);

next();
});
app.use( "/", (req, res, next) => {
    console.log("this is a first request", req.url, req.method);
     res.send("are this a express ");

});

app.use("/aditya", (req, res, next) => {
    console.log("this is a first request", req.url, req.method);
     res.send("are this a express code");

});

app.get("/aditya", (req, res, next) => {
    console.log("this is a Second request", req.url, req.method);

    res.send("this is a aditya");
   
});




const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is runinng on  adress http://localhost:${PORT}`)
});


