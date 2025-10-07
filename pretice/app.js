// const express = require('express');
// const app = express();

// app.get('/user', (req, res) => {
//     console.log(req.url, req.method);
//     res.send(`
//         <h1>Hey I am User Page</h1>
//         <a href="/">Go back to Home</a>
//     `);
// });

// app.get('/', (req, res) => {
//     console.log(req.url, req.method);
//     res.send(`
//         <h1>Hey I am Shivendra Mahariya</h1>
//         <a href="/user">Go to user</a>
//     `);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });













const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  console.log("req.url, req.method");

  res.send(`<h1> hey i am shivendra mahariya </h1>
        <a href="/user">user hai</a>`);
});

app.get("/user", (req, res, next) => {
  console.log("req.url, req.method");

  res.send(`
<h1>Ragister a player name</h1>

<form action="/user" method="post">

    <input type="text" name="plyer name" placeholder="enter a plyer name">

    <input type="number" age=""
    placeholder="enter your age">
<input type="submit">
</form>`);
});

app.post("/user", (req, res, next) => {
  console.log(req.body);
  res.send("<h1> plyer ragistration successsfully");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is runinig on http://localhost:${PORT}`);
});





let num = [1, 2 , 3, 4, 5];

for (let number = 0; number < num.length; number++) {
  if (num[number] > 5) {
    console.log(num[number]);
  }
}

















// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`
//     <h2>User Registration Form</h2>
//     <form action="/register" method="POST">
//       <input type="text" name="username" placeholder="Enter username" /><br /><br />
//       <input type="email" name="email" placeholder="Enter email" /><br /><br />
//       <input type="password" name="password" placeholder="Enter password" /><br /><br />
//       <input type="number" name="age" placeholder="Enter age" /><br /><br />
//       <button type="submit">Register</button>
//     </form>
//   `);
// });

// app.post("/register", (req, res) => {
//   const { username, email, password, age } = req.body;

//   console.log(" Form data aaya hai:", req.body);

//   if (!username || !email || !password) {
//     return res.send(" Please fill all required ");
//   }

//   res.send(`
//     Registration Successful!<br><br>
//     <strong>Username:</strong> ${username}<br>
//     <strong>Email:</strong> ${email}<br>
//     <strong>Age:</strong> ${age}<br>
//   `);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(` Server is running at http://localhost:${PORT}`);
// });
