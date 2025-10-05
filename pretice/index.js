const express = require('express');

const app = express();


app.use((req, res, next) => {
   console.log("this is a first code");
   next();
});


app.use((req, res, next) => {
   console.log("this is a second code");
   next();
});


app.use((req, res, next) => {
   console.log("this is a second code", req.url, req.method);
   res.send("hey this is a response")
});












const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is runing on adress http://localhost:${PORT}`)
})