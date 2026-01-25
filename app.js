const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/", require("./routers")); // Importing routes from routes/index.js

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
